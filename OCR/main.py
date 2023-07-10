from typing import Annotated
from pathlib import Path
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import HTMLResponse
import cv2
from htr_pipeline import read_page, DetectorConfig, LineClusteringConfig

app = FastAPI()

@app.post("/files/")
async def create_files(files: Annotated[list[bytes], File()]):
    return {"file_sizes": [len(file) for file in files]}

UPLOAD_DIR = Path("HTRPipeline/data")

@app.post("/uploadfiles/")
async def create_upload_files(files: list[UploadFile]):
    for file in files:
        file_path = UPLOAD_DIR / file.filename
        with file_path.open("wb") as buffer:
            buffer.write(await file.read())
    return {"filenames": [file.filename for file in files]}

@app.get("/")
async def main():
    content = """
<body>
<form action="/files/" enctype="multipart/form-data" method="post">
<input name="files" type="file" multiple>
<input type="submit">
</form>
<form action="/uploadfiles/" enctype="multipart/form-data" method="post">
<input name="files" type="file" multiple>
<input type="submit">
</form>
</body>
    """
    
    
    img = cv2.imread('data/sample_1.png', cv2.IMREAD_GRAYSCALE)

    read_lines = read_page(img, 
                        DetectorConfig(height=200, enlarge=1), 
                        line_clustering_config=LineClusteringConfig(min_words_per_line=2))
    f = open("demofile2.txt", "a")
        
    for read_line in read_lines:
        print(' '.join(read_word.text for read_word in read_line))
        f.write(' '.join(read_word.text for read_word in read_line))
    f.close()      
    return HTMLResponse(content=content)