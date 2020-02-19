const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {

    try {
            const scools = await scoolsGetFindAllController();
            res.json(scools);

    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
});


router.get('/:id', async (req, res) => {

    try {
            const scool = await scoolsGetFindByIdController(req.params.id);
            res.json(scool);

    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
});

router.post('/:id', async (req, res) => {

    try {
            const scool = await scoolPostCreateController(req.body);
            res.json(scool);

    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
});

router.put('/:id', async (req, res) => {

    try {
            const scool = await scoolPutUpdateController(req.params.id);
            res.json(scool);

    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
});

router.delete('/:id', async (req, res) => {

    try {
            const scool = await scoolDeleteFindIdController(req.params.id);
            res.json(scool);

    } catch (e) {

            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        
    }
})


module.exports = router;