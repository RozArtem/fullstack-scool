const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const scoolShema = new Schema({

    _id: mongoose.Schema.Types.ObjectId,
    theme: {
        type: String,
        required: true
    },
    teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
    classroom: {
        type: String,
        required: true
    },
    spendTime: {
        type: String,
        required: true,
        enum: ['first', 'second', 'third', 'fourth' ]
    }
        
})


const Scool = mongoose.model('Scool', scoolShema);

module.exports = Scool;