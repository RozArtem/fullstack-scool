const Scool = require('../models/scool.model');
const Teacher = require('../models/teacher.model');


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
        const [{teacher}] = req.body;
        console.log(teacher);
        
        const t = Teacher.findOne({fullName: teacher});
        console.log(t)
        //const [theme,spendTime, spendPlace] = req.body;
        //const scool = await Scool.create(theme, teacher, spendTime, spendPlace);
        res.status(201).json()
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

//@ PUT /api.v1/scools/:id 
// update the scool by id

exports.scoolPutUpdateController = async (req, res)  => {


    try {

        
        const [theme, teacher , spendTime, spendPlace] = req.body;


        const scool = await Scool.findByIdAndUpdate(req.params.id, theme, teacher , spendTime, spendPlace);
        res.status(201).json(`${scool} - is updated`)
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

//@ DELETE /api.v1/scools
// delete all scools

exports.scoolDeleteAllController = async (req, res)  => {


    try {

        await Scool.deleteMany();
        res.status(200).json('удалены все элементы')
        
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

