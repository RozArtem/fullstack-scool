const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const teacherShema = new Schema({

    _id: mongoose.Schema.Types.ObjectId,
    fullName: {
        type: String,
        required: true
    },
    courseTaught: { type: Schema.Types.ObjectId, ref: 'Scool' },
    phoneNumber: {
        type: String,
        required: true,
    }
        
})


const Teacher = mongoose.model('Teacher', scoolShema);

module.exports = Teacher;