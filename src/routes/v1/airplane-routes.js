const express = require('express');
const router = express.Router();

const { AirplaneController } = require("../../controllers");
const { AirplainMiddlewares } = require('../../middlewares')

console.log("Inside airplanes routes");

// /api/v1/airplanes POST
router.post('/',
           AirplainMiddlewares.ValidateCreateRequest,
           AirplaneController.createAirplane);

// /api/v1/airplanes GET
 router.get('/',
           AirplaneController.getAirplanes);  
                   
module.exports = router;