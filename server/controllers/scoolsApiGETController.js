const Scool = require('../models/scoolModel');

const scoolsApiGETController = async () => {


    try {

        const books = await Scool.find();
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }
    

    
}

module.exports = scoolsApiGETController;

