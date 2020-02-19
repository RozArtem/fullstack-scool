const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const studentShema = new Schema({

    _id: mongoose.Schema.Types.ObjectId,

    fullName: {
        type: String,
        required: true
    },
    fixGroup: { 
        type: Schema.Types.ObjectId, 
        ref: 'Group',
        required: true 
    },
    mobileNumber:{
         type: String
    },
    uniqNumber: {
        type: String,
        required: true

    }
        
})


const Student = mongoose.model('Student', studentShema);

module.exports = Student;