const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const studentShema = new Schema({



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
    }
   
})


const Student = mongoose.model('Student', studentShema);

module.exports = Student;