const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const calcularRoutes = require('../routes');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', calcularRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
