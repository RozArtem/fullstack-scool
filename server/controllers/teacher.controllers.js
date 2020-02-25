const Teacher = require('../models/teacher.model');


//@ GET /api.v1/teacher
// find all scools

exports.teacherGetFindAllController = async (req, res) => {


    try {

        await Teacher.find().exec((err, teachers) => {
            if (err) {
              return res.status(404).json({
                message: 'Teachers not found',
              });
            }
            return res.json(teachers);
          });


    } catch (err) {
        
        console.error(err.errormessage);
        
    }
    

    
};


//@ GET /api.v1/teacher/:id 
// find the teacher by id

exports.teacherGetFindByIdController = async (req, res)  => {


    try {

        await Teacher.findById(req.params.id, (err, teacher) => {
            if (err) {
              return res.status(404).json({
                message: 'Teacher not found',
              });
            }
            return res.json(teacher);
          });

        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};


//@ POST /api.v1/teachers
// create a new teacher


exports.teacherPostCreateController = async (req, res)  => {


    try {
        const postData = {

            fullName: req.body.fullName,
            fixCabinet: req.body.fixCabinet,
            mobileNumber: req.body.mobileNumber
        }

        await Teacher.create(postData, (err,teacher) => {

            if (err) return res.json(err);

            res.status(201).json(teacher);

        });
        
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

//@ PUT /api.v1/teachers/:id 
// update the teacher by id

exports.teacherPutUpdateController = async (req, res)  => {


    try {
        
        const postData = {
            
            fullName: req.body.fullName,
            fixCabinet: req.body.fixCabinet,
            mobileNumber: req.body.mobileNumber
        }
      

        await Teacher.findByIdAndUpdate(req.params.id, postData, (err, teacher) => {

            if (err) return res.json(err);

            res.status(201).json(`${teacher} - is updated`)


        });

        
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

        await Teacher.findByIdAndRemove(req.params.id, (err, teacher) => {

            if (err) return res.json(err);

            res.status(200).json(`${teacher} - удалён`)

        });
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

