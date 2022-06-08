/* const express = require('express');
const routes = require('./routes'); */

import express from 'express';
import routes from './routes';

class App {
    constructor() {
        this.server = express();
        this.routes();
    }

    
    routes () {
        this.server.use(routes);
    }
}

// module.exports =  new App().server;
export default new App().server;