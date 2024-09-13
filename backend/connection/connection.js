const mongoose = require("mongoose");
 const conn = async() => {
    try{
        await mongoose.connect("mongodb+srv://parthajyoti:databasePJC@contact.04ouc.mongodb.net/contact").then(() => {
            console.log("Connected");
        }, () => {console.log(error) })
     } catch  (error) {
        console.log(error)
     }}
 
     conn()