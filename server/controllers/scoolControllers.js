const Scool = require('../models/scool.model');


//@ GET /api.v1/scools 
// find all scools

const scoolsGetFindAllController = async () => {


    try {

        const scools = await Scool.find();
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }
    

    
};


//@ GET /api.v1/scools/:id 
// find the scool by id

const scoolsGetFindByIdController = async (reqId)  => {


    try {

        const scool = await Scool.findById(reqId);
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};


//@ POST /api.v1/scools 
// create a new scool


const scoolPostCreateController = async (reqBody)  => {


    try {

        const scool = await Scool.create(reqBody);
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

//@ PUT /api.v1/scools/:id 
// update the scool by id

const scoolPutUpdateController = async (reqId)  => {


    try {

        const scool = await Scool.findByIdAndUpdate(reqId);
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

//@ DELETE /api.v1/scools/:id 
// delete the scool by id


const scoolDeleteFindIdController = async (reqId)  => {


    try {

        const scool = await Scool.findByIdAndRemove(reqId);
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};



module.exports = [
    scoolsGetFindAllController, 
    scoolsGetFindByIdController,
    scoolPostCreateController,
    scoolPutUpdateController,
    scoolDeleteFindIdController
];

