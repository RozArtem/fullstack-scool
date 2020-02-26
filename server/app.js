const express = require('express');
const cors = require('cors');




const connectDB = require('./db/db')


// Routes

const scools = require('./routes/scool.rotes');
const teachers = require('./routes/teacher.routes');
const students = require('./routes/student.rotes')


const app = express();
const port = process.env.PORT || 5000;



//connect DB

connectDB();


app.use(cors({origin: true, credentials: true}));
app.use(express.json());


//use Routes

app.use('/api/v1/scools', scools);
app.use('/api/v1/teachers', teachers);
app.use('/api/v1/students', students);





app.listen(port, () => {

    console.log(`Server is running on port ${port}`)
    
})

