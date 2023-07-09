const mongoose =require( "mongoose");
const MONGO_URI="mongodb+srv://AllMightLegend:Elderwand@cluster0.bd8b5vz.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    mongoose.connect(MONGO_URI)
}
<<<<<<< HEAD
module.exports = connectDb;
=======
module.exports = connectDb;
>>>>>>> 8af869665ec4e83983f56c5ffbaaf3647cf396dd
