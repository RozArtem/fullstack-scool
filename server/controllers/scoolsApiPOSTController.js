const Scool = require('../models/scoolModel');

const scoolsApiPOSTController = async (reqData) => {


    try {

        await Scool.create(reqData);
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }
    
        console.log(reqData)
    
}

module.exports = scoolsApiPOSTController;

