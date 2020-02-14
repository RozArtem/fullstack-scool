const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const connectDB = require('./db/db')





const app = express();
const port = process.env.PORT || 5000;





connectDB();


app.use(cors());
app.use(express.json());



app.listen(port, () => {

    console.log(`Server is running on port ${port}`)
    
})
