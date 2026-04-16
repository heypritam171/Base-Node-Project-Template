const CrudRepositories = require('./crud-repositories');
const { Flight } = require('../models');

class flightsRepositories extends CrudRepositories{
    constructor(){
        super(Flight);
    }
}

module.exports = flightsRepositories;