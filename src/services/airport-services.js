const { StatusCodes } = require('http-status-codes');
const { AirportRepositories } = require('../repositories');
const AppError = require('../utils/errors/app-errors');

const airportRepositories = new AirportRepositories();


async function createAirport(data) {
    try {
        const airport = await airportRepositories.create(data);
        return airport;
    } catch (error) {
        if (error.name == 'SequelizeValidationError') {
            let explanetion = [];
            error.errors.forEach((err) => {
                explanetion.push(err.message);
            });

            throw new AppError(explanetion, StatusCodes.BAD_REQUEST);
        }

        throw new AppError("Cannot create a new Airport Object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports() {
    try {
        const airport = await airportRepositories.getAll();
        return airport;
    } catch (error) {
        throw new AppError("Cannot fetch data of the airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getAirport(id) {
    try {
        const airport = await airportRepositories.get(id);
        return airport;
    } catch (error) {
        if (error.StatusCode == StatusCodes.NOT_FOUND) {
            throw new AppError("The airport you request is not present", error.StatusCode);
        }

        throw new AppError("Cannot fetch data of the Airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id) {
    try {
        const airport = await airportRepositories.destroy(id);
        return airport;
    } catch (error) {
        if (error.StatusCode == StatusCodes.NOT_FOUND) {
            throw new AppError("The airport you request is not present", error.StatusCode);
        }

        throw new AppError("cannot fetch data of the airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id, data){
    try {
        const airport = await airportRepositories.update(id, data);
        return airport;
    } catch (error) {
        if(error.StatusCode == StatusCodes.NOT_FOUND){
           throw new AppError("The airport you request is not present", error.StatusCode);
        }
          throw new AppError("cannot fetch data of the airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}
