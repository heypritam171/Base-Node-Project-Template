const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services');
const { SuccessResponse, ErrorRespose } = require("../utils/common");
const { error } = require('../utils/common/error-response');


async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name
        });

        SuccessResponse.data = city;

        return res
            .status(StatusCodes.CREATED)
            .json({ SuccessResponse });
    } catch (error) {
        ErrorRespose.error = error;

        return res
            .status(error.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ ErrorRespose });
    }
}

async function deleteCity(req, res) {
    try {
        const city = await CityService.destroyCity(req.params.id);
        SuccessResponse.data = city;

        return res
            .status(StatusCodes.OK)
            .json({ SuccessResponse });
    } catch (error) {
        ErrorRespose.error = error;

        return res.status(error.StatusCode)
            .json({ ErrorRespose });
    }
}

async function updateCity(req, res) {
    try {
        const city = await CityService.updateCity(req.params.id, req.body);
        SuccessResponse.data = city;

        return res
            .status(StatusCodes.OK)
            .json({ SuccessResponse });
    } catch (error) {
        console.log("controller error => ", error);

        ErrorRespose.error = error.explanation || error.message;;

        return res
            .status(error.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ ErrorRespose });
    }
}

module.exports = {
    createCity,
    deleteCity,
    updateCity
}