import numpy as np
import pandas as pd
from scipy.stats import mode
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix
import pickle
import json
from fastapi import FastAPI
import uvicorn
from pydantic import BaseModel

DATA_PATH = "dataset/Training.csv"

app = FastAPI()


class Symptoms(BaseModel):
    symptom: str


@app.post("/predict")
def predict_disease(symptom: Symptoms):
    data = pd.read_csv(DATA_PATH).dropna(axis=1)
    # Checking whether the dataset is balanced or not
    disease_counts = data["prognosis"].value_counts()
    temp_df = pd.DataFrame(
        {"Disease": disease_counts.index, "Counts": disease_counts.values}
    )

    encoder = LabelEncoder()
    data["prognosis"] = encoder.fit_transform(data["prognosis"])

    X = data.iloc[:, :-1]
    y = data.iloc[:, -1]
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=24
    )

    def cv_scoring(estimator, X, y):
        return accuracy_score(y, estimator.predict(X))

    # Producing cross validation score for the models
    scores = cross_val_score(
        RandomForestClassifier(random_state=18),
        X,
        y,
        cv=10,
        n_jobs=-1,
        scoring=cv_scoring,
    )

    rf_model = RandomForestClassifier(random_state=18)
    rf_model.fit(X_train, y_train)
    preds = rf_model.predict(X_test)

    final_rf_model = RandomForestClassifier(random_state=18)
    final_rf_model.fit(X, y)

    test_data = pd.read_csv("./dataset/Testing.csv").dropna(axis=1)

    test_X = test_data.iloc[:, :-1]
    test_Y = encoder.transform(test_data.iloc[:, -1])

    rf_preds = final_rf_model.predict(test_X)

    symptoms = X.columns.values

    # Creating a symptom index dictionary to encode the
    # input symptoms into numerical form
    symptom_index = {}
    for index, value in enumerate(symptoms):
        symptom = " ".join([i.capitalize() for i in value.split("_")])
        symptom_index[symptom] = index

    data_dict = {
        "symptom_index": symptom_index,
        "predictions_classes": encoder.classes_,
    }

    # Defining the Function
    # Input: string containing symptoms separated by commas
    # Output: Generated predictions by models
    def predict_disease(symptoms):
        symptoms = symptoms.split(",")

        # creating input data for the models
        input_data = [0] * len(data_dict["symptom_index"])
        for symptom in symptoms:
            index = data_dict["symptom_index"][symptom]
            input_data[index] = 1

        # reshaping the input data and converting it
        # into suitable format for model predictions
        input_data = np.array(input_data).reshape(1, -1)

        rf_prediction = data_dict["predictions_classes"][
            final_rf_model.predict(input_data)[0]
        ]

        return json.dumps({"prediction": rf_prediction})


async def create_symptom(symptom: Symptoms):
    return predict_disease(symptom.symptom)
