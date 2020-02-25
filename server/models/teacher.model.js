const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const teacherShema = new Schema({

    

    fullName: {
        type: String,
       
    },
    fixCabinet: { 
        type: String,
    },
    mobileNumber: { 
        type: String
    }
        
})


const Teacher = mongoose.model('Teacher', teacherShema);

module.exports = Teacher;