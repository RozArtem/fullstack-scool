const Teacher = require('../models/teacher.model');


//@ GET /api.v1/teacher
// find all scools

exports.teacherGetFindAllController = async (req, res) => {


    try {

        const teachers = await Teacher.find();
        res.json(teachers);
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }
    

    
};


//@ GET /api.v1/teacher/:id 
// find the teacher by id

exports.teacherGetFindByIdController = async (req, res)  => {


    try {

        const teacher = await Teacher.findById(req.params.id);
        res.json(teacher);
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};


//@ POST /api.v1/teachers
// create a new teacher


exports.teacherPostCreateController = async (req, res)  => {


    try {

        const teacher = await Teacher.create(req.body);
        res.status(201).json(teacher)
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

//@ PUT /api.v1/teachers/:id 
// update the teacher by id

exports.teacherPutUpdateController = async (req, res)  => {


    try {

        const [fullName, scools, fixCabinet, mobileNumber] = req.body;

        const teacher = await Teacher.findByIdAndUpdate(req.params.id, fullName, scools, fixCabinet, mobileNumber);
        res.status(201).json(`${teacher} - is updated`)
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

//@ DELETE /api.v1/teachers
// delete all teachers

exports.teacherDeleteAllController = async (req, res)  => {


    try {

        await Teacher.deleteMany();
        res.status(200).json('удалены все элементы')
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

//@ DELETE /api.v1/teachers/:id 
// delete the teacher by id


exports.teacherDeleteFindIdController = async (req, res)  => {


    try {

        const teacher = await Teacher.findByIdAndRemove(req.params.id);
        res.status(200).json(`${teacher} - удалён`)
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

