const router = require('express').Router();
const scoolsApiGETController = require('../controllers/scoolsApiGETController');
const scoolsApiPOSTController = require('../controllers/scoolsApiPOSTController')




router.get('/', (req, res) => {

    scoolsApiGETController()
        .then(scools => res.json(scools))
        .catch(err => res.status(404).json({noscoolsfound: 'No Scools found'}));
});


router.post('/', (req, res) => {

    scoolsApiPOSTController(req.body)
        .then(scool => res.json({msg: 'Scool added successfullu'}))
        .catch(err => res.status(400).json({error: 'Unable to add this scool'}));

        console.log(req.body) 

      
});

module.exports = router;