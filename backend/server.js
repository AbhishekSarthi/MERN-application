const express = require('express');
const requests = require('./routes/requests')
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();


app.use(express.json());

//home page
app.get('/', (req,res) => {
    res.send("get lost");
})

//details page
app.use('/details' , requests);



//connect DB
mongoose.connect(process.env.DB_CONNECTION ,{ useNewUrlParser: true , useUnifiedTopology: true },() => console.log('DB connected...'))

app.listen(5000,console.log("Server running on port 5000"));