const express = require('express');
const router = express.Router();
const {infoController} = require('../../controllers');
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');

console.log("Inside v1 routes");


router.use('/airplanes', airplaneRoutes);
router.use('/city', cityRoutes);

router.get('/info',infoController.info);

module.exports = router;