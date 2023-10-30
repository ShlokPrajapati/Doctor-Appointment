const mongoose=require('mongoose')
const dotenv=require("dotenv")
dotenv.config()
const URL=process.env.MONDB_URL
const connectDB = async()=>
{
    try{
        await mongoose.connect(URL+"/Doctor");
        console.log(`MongoDb server connected ${mongoose.connection.host}`)
    }
    catch(error){
        console.log(`MongoDb server not connected ${error}`)
    }
}
module.exports = connectDB