import express from "express";
import {studentControllers} from '../controllers/student.controllers';

const router  = express.Router();





//@ GET /api.v1/scools 
// find all scools


router.get('/', async (req, res) => {

    try {
                await studentControllers.studentGetFindAllController(req, res);
           

    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
});


router.get('/:id', async (req, res) => {

    try {
                await studentControllers.studentGetFindByIdController(req, res);
            

    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
});





//@ POST /api.v1/scools

router.post('/', async (req, res) => {

    try {
                await studentControllers.studentPostCreateController(req, res);
          
    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
});

router.put('/:id', async (req, res) => {

    try {
                 await  studentControllers.studentPutUpdateController(req, res);
            

    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
});



router.delete('/', async (req, res) => {

        try {
                await   studentControllers.studentDeleteAllController(req, res);
              
    
        } catch (e) {
    
                res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
            
        }
    })

router.delete('/:id', async (req, res) => {

    try {
               await studentControllers.studentDeleteFindIdController(req, res);
          

    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
})


module.exports = router;