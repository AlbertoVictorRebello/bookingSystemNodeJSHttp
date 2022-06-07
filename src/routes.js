const  express = require('express');
const routes = new express.Router();

routes.get('/api-test', async (req, res) => {
    return res.json({
        message: 'The API is alive!'
    });
})

module.exports = routes;