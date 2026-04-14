const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-errors");
const { AirportService } = require("../services");
const { SuccessResponse, ErrorRespose } = require("../utils/common");


async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });

        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.CREATED)
            .json({ SuccessResponse });
    } catch (error) {
        console.error("Airport create error:", error);
        ErrorRespose.error = error;

        return res
            .status(error.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ ErrorRespose })
    }
}

async function getAirport(req, res) {
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;

        return res
            .status(StatusCodes.OK)
            .json({ SuccessResponse });
    } catch (error) {
        ErrorRespose.error = error;
        return res
            .status(error.StatusCode)
            .json({ ErrorRespose });
    }
}

async function getAirports(req, res) {
    try {
        const airport = await AirportService.getAirports();
        SuccessResponse.data = airport;

        return res
            .status(StatusCodes.OK)
            .json({ SuccessResponse })
    } catch (error) {
        ErrorRespose.error = error;

        return res
            .status(error.StatusCode)
            .json({ ErrorRespose });
    }
}

async function updateAirport(req, res) {
    try {
        const airport = await AirportService.updateAirport(req.params.id, req.body.data);
        SuccessResponse.data = airport;

        return res
            .status(StatusCodes.OK)
            .json({ SuccessResponse });
    } catch (error) {
        ErrorRespose.error = error;

        return res
            .status(error.StatusCode)
            .json({ ErrorRespose });
    }
}

async function destroyAirport(req, res) {
    try {
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.OK)
            .json({ SuccessResponse });
    } catch (error) {
        ErrorRespose.error = error;

        return res
            .status(error.StatusCode)
            .json({ ErrorRespose })
    }
}


module.exports = {
    createAirport,
    getAirport,
    getAirports,
    updateAirport,
    destroyAirport
}