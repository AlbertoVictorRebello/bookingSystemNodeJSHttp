/* const  express = require('express');
const routes = new express.Router(); */

import { Router } from 'express';
const routes = new Router();

routes.get('/api-test', async (req, res) => {
    return res.json({
        message: 'The API is alive!'
    });
});

export default routes;