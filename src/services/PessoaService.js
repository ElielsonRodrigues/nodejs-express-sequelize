const Services = require("./Service.js");

class PessoaService extends Services {

    /*HERDANDO OS METODOS DA MINHA CLASSE GENERICA DE SERVICE E 
    ATRIBUINDO MINHA MODEL PESSOA ATRAVÉS DO CONSTRUTOR */
    constructor() {
        super('Pessoa');
    }
}

module.exports = PessoaService;