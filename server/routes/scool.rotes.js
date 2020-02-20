const express = require('express');
const router = express.Router();
const scoolControllers = require('../controllers/scool.controllers');




//@ GET /api.v1/scools 
// find all scools


router.get('/', async (req, res) => {

    try {
                await scoolControllers.scoolsGetFindAllController(req, res);
           

    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
});


router.get('/:id', async (req, res) => {

    try {
                await scoolControllers.scoolsGetFindByIdController(req, res);
            

    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
});





//@ POST /api.v1/scools

router.post('/', async (req, res) => {

    try {
                await scoolControllers.scoolPostCreateController(req, res);
          
    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
});

router.put('/:id', async (req, res) => {

    try {
                 await  scoolControllers.scoolPutUpdateController(req, res);
            

    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
});



router.delete('/', async (req, res) => {

        try {
                await   scoolControllers.scoolDeleteAllController(req, res);
              
    
        } catch (e) {
    
                res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
            
        }
    })

router.delete('/:id', async (req, res) => {

    try {
               await scoolControllers.scoolDeleteFindIdController(req, res);
          

    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
})


module.exports = router;