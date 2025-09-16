const express = require('express');
const pessoas = require('./pessoaRouter.js');

module.exports = app => {
    app.use(
        express.json(),
        pessoas,
    );
};