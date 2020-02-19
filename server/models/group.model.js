const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const groupShema = new Schema({

    _id: mongoose.Schema.Types.ObjectId,

    groupTitle: {
        type: String,
        required: true
    },
    students: [{
        type: Schema.Types.ObjectId, 
        ref: 'Student'
    }],
    curator: {
        type: Schema.Types.ObjectId, 
        ref: 'Teacher'
    },
        
})


const Group= mongoose.model('Group', groupShema);

module.exports = Group;