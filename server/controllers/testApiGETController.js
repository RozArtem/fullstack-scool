const Test = require('../models/testModel');

const testApiGETController = async () => {


    try {

        const books = await Test.find();
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }
    

    
}

module.exports = testApiGETController;