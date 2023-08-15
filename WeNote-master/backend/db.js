const mongoose = require("mongoose");
const password = "eVffhSzvspu6Ty2W";
const db_link = `mongodb+srv://abhishekgoyal11aug2003:${password}@cluster0.odskqtk.mongodb.net/`;
connectToMongo = ()=>{
    mongoose.connect(db_link).then(()=>{
        console.log("Connected");
    }).catch((err)=>{
        console.log(err);
        console.log("Unable to connect to the database");
    })
}
module.exports = connectToMongo;