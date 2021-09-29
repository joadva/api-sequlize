const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');

const app = express();



require('./db');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.send('Hola Levante aqui esto')
})

app.use('/api', apiRouter);
app.listen(3000, () => {
    console.log('Servidor Levantado ')
});

exports.module = app ;