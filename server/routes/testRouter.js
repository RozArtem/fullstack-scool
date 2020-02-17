const router = require('express').Router();
const testApiPOSTController = require('../controllers/testApiPOSTController');
const scoolsApiGetController = require('../controllers/testApiGETController');

const Test = require('../models/testModel');


router.get('/', (req, res) => {

    Test.find()
        .then(scools => res.json(scools))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.post('/', (req, res) => {

    Test.create(req.body)
        .then(scool => res.json({msg: 'Scool added successfullu'}))
        .catch(err => res.status(400).json({error: 'Unable to add this scool'}));

         

      
});

module.exports = router;