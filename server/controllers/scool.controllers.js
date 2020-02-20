const Scool = require('../models/scool.model');


//@ GET /api.v1/scools 
// find all scools

exports.scoolsGetFindAllController = async (req, res) => {


    try {

        const scools = await Scool.find();
        res.json(scools);
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }
    

    
};


//@ GET /api.v1/scools/:id 
// find the scool by id

exports.scoolsGetFindByIdController = async (req, res)  => {


    try {

        const scool = await Scool.findById(req.params.id);
        res.json(scool);
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};


//@ POST /api.v1/scools 
// create a new scool


exports.scoolPostCreateController = async (req, res)  => {


    try {

        const scool = await Scool.create(req.body);
        res.status(201).json(scool)
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

//@ PUT /api.v1/scools/:id 
// update the scool by id

exports.scoolPutUpdateController = async (req, res)  => {


    try {

        const scool = await Scool.findByIdAndUpdate(req.params.id);
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

//@ DELETE /api.v1/scools
// delete all scools

exports.scoolDeleteAllController = async (req, res)  => {


    try {

        await Scool.deleteMany();
        res.status(200).send('удалены все элементы')
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

//@ DELETE /api.v1/scools/:id 
// delete the scool by id


exports.scoolDeleteFindIdController = async (req, res)  => {


    try {

        const scool = await Scool.findByIdAndRemove(req.params.id);
        res.status(200).send(`${scool} - удалён`)
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

