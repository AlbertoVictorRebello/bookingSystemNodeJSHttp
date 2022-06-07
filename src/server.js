// import app from './app'

const app = require('./app')

const PORT = 3333;

app.listen(PORT, () => {
    console.log('Starting Server on http://localhost:' + PORT);
})