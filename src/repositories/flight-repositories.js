const CrudRepositories = require('./crud-repositories');
const { Flight } = require('../models');

class flightsRepositories extends CrudRepositories{
    constructor(){
        super(Flight);
    }

    async getAllFlights(filter){
        const response = await Flight.findAll({
            where:filter
     
        })
     return response;
    }
}

module.exports = flightsRepositories;