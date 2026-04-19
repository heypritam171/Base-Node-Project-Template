const CrudRepositories = require('./crud-repositories');
const { Flight } = require('../models');

class flightsRepositories extends CrudRepositories{
    constructor(){
        super(Flight);
    }

    async getAllFlights(filter, sort){
        const response = await Flight.findAll({
            where:filter,
            order: sort
        })
     return response;
    }
}

module.exports = flightsRepositories;