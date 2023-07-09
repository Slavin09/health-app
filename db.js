const mongoose =require( "mongoose");
const MONGO_URI="mongodb+srv://AllMightLegend:Elderwand@cluster0.bd8b5vz.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    mongoose.connect(MONGO_URI)
}
module.exports = connectDb;