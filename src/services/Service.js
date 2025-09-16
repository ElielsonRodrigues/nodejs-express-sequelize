const dataSource = require('../models');

class Services {

    constructor(nameModel) {
        this.model = nameModel;
    }

    async findAll() {
        return dataSource[this.model].findAll();
    }
}

module.exports = Services;