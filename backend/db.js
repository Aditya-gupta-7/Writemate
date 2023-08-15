const mongoose= require('mongoose');
const mangoURI="mongodb://127.0.0.1:27017/test"

const connecttoMongo=()=>{
    mongoose.connect(mangoURI)
    console.log("connected");
}

module.exports=connecttoMongo;