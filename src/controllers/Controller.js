class Controller {

    constructor(entityService) {
        this.entityService = entityService;
    }

    async findAll(req, res) {
        try {
            const allData = await this.entityService.findAll();
            return res.status(200).json(allData);
        } catch (error) {
            console.log(error);
        }

    }
}

module.exports = Controller;