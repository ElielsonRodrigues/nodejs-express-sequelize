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


    async findById(req, res) {
        try {
            // Forma 1
            /*
            let getId = req.params.id
            const data = await this.entityService.findById(getId);
            */

            //Forma 2
            const data = await this.entityService.findById(req.params.id);
            return res.status(200).json(data);

        } catch (error) {
            console.log(error);
        }
    }

    async create(req, res) {
        try {
            let getData = req.body;
            const dataCreate = await this.entityService.create(getData);
            return res.status(201).json(dataCreate.dataValues);
        } catch (error) {
            console.log(error);
        }
    }


    async update(req, res) {
        try {
            const dataUpdate = await this.entityService.update(req.params.id, req.body);
            let checkUpdate = dataUpdate[0] ? true : false;

            if (checkUpdate) {
                return res.status(200).send({ message: `Atualizado com sucesso!` });
            } else {
                return res.status(200).send({ message: `Não localizamos nenhum registro com Id: ${req.params.id} ` });
            }
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(req, res) {
        try {
            let getId = req.params.id
            const isDelete = await this.entityService.deleteById(getId);
            if (isDelete) {
                return res.status(204).send();
            } else {
                return res.status(200).send({ message: `Não localizamos nenhum registro com Id: ${getId} ` });
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Controller;