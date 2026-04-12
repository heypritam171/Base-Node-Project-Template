const { Model, where } = require("sequelize");
// const { Logger } = require("../config/logger-config");
const logger = require('../config/logger-config');


class CrudRepository {

    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const responce = this.model.create(data);
        return responce;

    }

    async destroy(data) {
        const responce = this.model.destroy({
            where: {
                id: data
            }
        });
        return responce;

    }

    async get(data) {
        const responce = this.model.findByPk(data);
        return responce;

    }
    async getAll() {
        const responce = this.model.findAll();
        return responce;

    }
    async update(id, data) {

        const responce = this.model.update(data, { // data --> {col: vlaue....}
            where: {
                id: id
            }
        });
        return responce;

    }

}

module.exports = CrudRepository;