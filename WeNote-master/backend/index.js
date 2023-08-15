const connectToMongo = require("./db")
const express = require('express')
const auth = require('./routes/auth')
const notes = require('./routes/notes')
var cookieParser = require('cookie-parser');
const cors = require('cors');
connectToMongo();  

port = 8000;

const app = express()
app.use(cors({
    origin: '*'
}));
app.listen(port,()=>{
    console.log(`App listening on port localhost:${port}`);
});

app.use(express.json())
app.use(cookieParser());
app.use('/auth',auth);
app.use('/notes',notes);



