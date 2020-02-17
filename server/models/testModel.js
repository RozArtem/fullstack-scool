const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const testShema = new Schema({

   testKey: {type: String}
        
})


const Test = mongoose.model('Test', testShema);

module.exports = Test;