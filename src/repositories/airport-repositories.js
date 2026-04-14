const crudRepositories = require('../repositories/crud-repositories');
const { Airport } = require('../models')


class airportRepositories extends crudRepositories{
    constructor(){
      super(Airport);
    }
}

module.exports = airportRepositories;
