const express = require('express');
const router = express.Router();
const teacherControllers = require('../controllers/teacher.controllers');





//@ GET /api.v1/teachers 
// find all teachers


router.get('/', async (req, res) => {

    try {
                await teacherControllers.teacherGetFindAllController(req, res);
           

    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
});


router.get('/:id', async (req, res) => {

    try {
                await teacherControllers.teacherGetFindByIdController(req, res);
            

    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
});





//@ POST /api.v1/scools

router.post('/', async (req, res) => {

    try {
                await teacherControllers.teacherPostCreateController(req, res);
          
    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
});

router.put('/:id', async (req, res) => {

    try {
                 await  teacherControllers.teacherPutUpdateController(req, res);
            

    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
});



router.delete('/', async (req, res) => {

        try {
                await   teacherControllers.teacherDeleteAllController(req, res);
              
    
        } catch (e) {
    
                res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
            
        }
    })

router.delete('/:id', async (req, res) => {

    try {
               await teacherControllers.teacherDeleteFindIdController(req, res);
          

    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
})

module.exports = router;