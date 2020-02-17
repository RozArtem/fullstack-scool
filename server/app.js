const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const connectDB = require('./db/db')


// Routes

const scools = require('./routes/scoolsRouters');
const test = require('./routes/testRouter')


const app = express();
const port = process.env.PORT || 5000;



//connect DB

connectDB();


app.use(cors({origin: true, credentials: true}));
app.use(express.json());


//use Routes

app.use('/api/v1/scools', scools);
app.use('/api/v1/test', test);



app.listen(port, () => {

    console.log(`Server is running on port ${port}`)
    
})

