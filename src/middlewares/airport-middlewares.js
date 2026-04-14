const { StatusCodes } = require("http-status-codes");
const { ErrorRespose, SuccessResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-errors');

function validateCreaterequest(req, res, next) {
    if (!req.body.name) {
        ErrorRespose.message = "Something went wrong while creating airports";
        ErrorRespose.error = new AppError(["Airport name not found in the incomming request in the correct form"], StatusCodes.BAD_REQUEST);


        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ ErrorRespose });
    }
    if (!req.body.code) {
        ErrorRespose.message = "Something went wrong while creating airports";
        ErrorRespose.error = new AppError(["Airport code not found in the incomming request in the correct form"], StatusCodes.BAD_REQUEST);


        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ ErrorRespose });
    }
    if (!req.body.cityId) {
        ErrorRespose.message = "Something went wrong while creating airports";
        ErrorRespose.error = new AppError(["Airport codeId not found in the incomming request in the correct form"], StatusCodes.BAD_REQUEST);


        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ ErrorRespose });
    }
    next();
}

module.exports = {
    validateCreaterequest
}