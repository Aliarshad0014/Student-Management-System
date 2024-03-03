const mongoose = require("mongoose")

const URI = "mongodb://127.0.0.1:27017/student_admin"

const connectDb = async () =>{
    try{
        await mongoose.connect(URI);
        console.log("Connection sucessfull")
    } catch(error){
        console.error("database error")
        process.exit(0)
    }
}

module.exports = connectDb;
