const { StatusCodes } = require("http-status-codes");
const { CityRepositories } = require("../repositories");
const AppError = require("../utils/errors/app-errors");
const { SuccessResponse } = require("../utils/common");

const cityRepositories = new CityRepositories();

async function createCity(data) {

    try {
        const city = await cityRepositories.create(data);
        return city;
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
        if (error.name == "SequelizeValidationError" || error.name == "SequelizeUniqueConstraintError") {
            let explanetion = [];
            error.errors.forEach((err) => {
                explanetion.push(err.message);
            });
            throw new AppError(explanetion, StatusCodes.NOT_FOUND);
        }
        throw new AppError("Cannot create a new city object", StatusCodes.INTERNAL_SERVER_ERROR);
    }

}


// async function getCitys() {
//     try {
//         const city = await cityRepositories.getAll();
//         return city;
//     } catch (error) {
//         throw new AppError("Cannot fetch data of the airplanes", StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }

module.exports = {
    createCity
}