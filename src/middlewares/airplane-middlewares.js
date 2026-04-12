const { StatusCodes } = require('http-status-codes');
const { ErrorRespose } = require('../utils/common');
const AppError = require('../utils/errors/app-errors');

function ValidateCreateRequest(req, res, next) {


    if (!req.body || !req.body.modelNumber) {

        ErrorRespose.message = "Something went wrong while creating airplanes";
        ErrorRespose.error = new AppError(["Model Number not found in the incomming request in the correct form"], StatusCodes.BAD_REQUEST);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ ErrorRespose });

    }
    next();
}

module.exports = {
    ValidateCreateRequest
}