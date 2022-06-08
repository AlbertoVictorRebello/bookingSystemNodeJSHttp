import { Router } from 'express';
import User from './app/models/User';
import Database from './database/index';

const routes = new Router();

routes.get('/api-test', async (req, res) => {
    return res.json({
        message: 'The API is alive!'
    });
});

routes.post('/users', async(req, res) => {   
        const user = await User.create({
            name: "user-name-1",
            email: "user1@server.com",
            password_hash: "123456"
        });
        return res.json(user);
});



export default routes;