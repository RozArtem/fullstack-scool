const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const teacherShema = new Schema({

    _id: mongoose.Schema.Types.ObjectId,

    fullName: {
        type: String,
        required: true
    },
    scools: [{
        type: Schema.Types.ObjectId, 
        ref: 'Scool'
    }],
    fixCabinet: { 
        type: String,
    },
    mobileNumber: { 
        type: String
    },
    mobileNumber: {
        type: String,

    },
        
})


const Teacher = mongoose.model('Teacher', teacherShema);

module.exports = Teacher;