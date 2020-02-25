const Scool = require('../models/scool.model');
const Teacher = require('../models/teacher.model');


//@ GET /api.v1/scools 
// find all scools

exports.scoolsGetFindAllController = async (req, res) => {


    try {

      await Scool.find().exec((err, scools) => {
            if (err) {
              return res.status(404).json({
                message: 'Scools not found',
              });
            }
            return res.json(scools);
          });

        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }
    

    
};


//@ GET /api.v1/scools/:id 
// find the scool by id

exports.scoolsGetFindByIdController = async (req, res)  => {


    try {

       await Scool.findById(req.params.id, (err, scool) => {
            if (err) {
              return res.status(404).json({
                message: 'Scool not found',
              });
            }
            return res.json(scool);
          });
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};


//@ POST /api.v1/scools 
// create a new scool


exports.scoolPostCreateController = async (req, res)  => {


    try {

        const postData = {

            theme: req.body.theme,
            teacher: req.body.teacher,
            spendPlace: req.body.spendPlace,
            spendTime: req.body.spendTime

        };
        
        

        if (req.body.teacher) {

            postData.teacher = await Teacher.findOne({fullName: req.body.teacher}, (err) => {
                if (err) return res.json(err);
            })

                if (!postData.teacher) {res.redirect("./teachers")};

            postData.teacher = postData.teacher._id

        };

         if (req.body.teacher === '') {postData.teacher = null};
        
       await Scool.create(postData, (err,scool) => {

            if (err) return res.json(err);

            res.status(201).json(scool);

        });

        
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

//@ PUT /api.v1/scools/:id 
// update the scool by id

exports.scoolPutUpdateController = async (req, res)  => {


    try {

        const postData = {

            theme: req.body.theme,
            teacher: req.body.teacher,
            spendPlace: req.body.spendPlace,
            spendTime: req.body.spendTime

        };

        if (req.body.teacher) {

            postData.teacher = await Teacher.findOne({fullName: req.body.teacher}, (err) => {
                if (err) return res.json(err);
            })

                if (!postData.teacher) {res.redirect("./teachers")};

            postData.teacher = postData.teacher._id

        };

         if (req.body.teacher === '') {postData.teacher = null};


        await Scool.findByIdAndUpdate(req.params.id, postData, (err, scool) => {

            if (err) return res.json(err);

            res.status(201).json(`${scool} - is updated`)

        });
        
        
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

        await Scool.findByIdAndRemove(req.params.id, (err, scool) => {

            if (err) return res.json(err);

            res.status(200).send(`${scool} - was deleted`)

        });
        
        
        
    } catch (err) {
        
        console.error(err.errormessage);
        
    }

};

