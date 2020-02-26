import {Student} from '../models/student.model';
import {Group} from '../models/group.model'



exports.studentGetFindAllController = async (req, res) => {


    try {

      await Student.find().exec((err, students) => {
            if (err) {
              return res.status(404).json({
                message: 'Students not found',
              });
            }
            return res.json(students);
          });

        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }
    

    
};


//@ GET /api.v1/scools/:id 
// find the student by id

exports.studentGetFindByIdController = async (req, res)  => {


    try {

       await Student.findById(req.params.id, (err, student) => {
            if (err) {
              return res.status(404).json({
                message: 'Scool not found',
              });
            }
            return res.json(student);
          });
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};


//@ POST /api.v1/scools 
// create a new scool


exports.studentPostCreateController = async (req, res)  => {


    try {

        const postData = {

            fullName: req.body.fullName,
            fixGroup: req.body.fixGroup,
            mobileNumber: req.body.mobileNumber,
        

        };
        
        if (req.body.fixGroup === '') {postData.fixGroup = null};

        if (req.body.fixGroup) {

            postData.fixGroup = await Group.findOne({groupTitle: req.body.fixGroup}, (err) => {
                if (err) return res.json(err);
            })

                if (! postData.fixGroup) {res.redirect("./grops")};

                postData.fixGroup = postData.fixGroup._id

        };

         
        
       await Student.create(postData, (err, student) => {

            if (err) return res.json(err);

            res.status(201).json(student);

        });

        
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

//@ PUT /api.v1/scools/:id 
// update the scool by id

exports.studentPutUpdateController = async (req, res)  => {


    try {

        const postData = {

            fullName: req.body.fullName,
            fixGroup: req.body.fixGroup,
            mobileNumber: req.body.mobileNumber,
        

        };

        if (req.body.fixGroup === '') {postData.fixGroup = null};

        if (req.body.fixGroup) {

            postData.fixGroup = await Group.findOne({groupTitle: req.body.fixGroup}, (err) => {
                if (err) return res.json(err);
            })

                if (! postData.fixGroup) {res.redirect("./grops")};

                postData.fixGroup = postData.fixGroup._id

        };

     


        await Student.findByIdAndUpdate(req.params.id, postData, (err, student) => {

            if (err) return res.json(err);

            res.status(201).json(`${student} - is updated`)

        });
        
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

//@ DELETE /api.v1/scools
// delete all scools

exports.studentDeleteAllController = async (req, res)  => {


    try {

        await Student.deleteMany();
        res.status(200).json('удалены все элементы')
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

//@ DELETE /api.v1/scools/:id 
// delete the scool by id


exports.studentDeleteFindIdController = async (req, res)  => {


    try {

        await Student.findByIdAndRemove(req.params.id, (err, student) => {

            if (err) return res.json(err);

            res.status(200).send(`${student} - was deleted`)

        });
        
        
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

module.exports = StudentControlers;