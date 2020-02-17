const Test = require('../models/testModel');

const testApiPOSTController = async (reqData) => {


    try {

        const book = await Test.create(reqData);
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }
    
      
}

module.exports = testApiPOSTController;

