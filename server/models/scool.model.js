const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const scoolShema = new Schema({

    
    
    theme: {
        type: String,
        required: true
    },
    teacher: {

          type: Schema.Types.ObjectId,
          ref: 'Teacher'
         
    },
    spendPlace: {
        type: String,
        required: true
    },
    spendTime: {
        type: String,
        required: true,
    }
        
})


const Scool = mongoose.model('Scool', scoolShema);

module.exports = Scool;