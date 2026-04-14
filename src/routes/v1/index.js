const express = require('express');
const router = express.Router();
const {infoController} = require('../../controllers');
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');

console.log("Inside v1 routes");


router.use('/airplanes', airplaneRoutes);
router.use('/city', cityRoutes);
router.use('/airport', airportRoutes)

router.get('/info',infoController.info);

module.exports = router;