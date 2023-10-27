const express = require('express');
const app = express();
const port = 3000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data } = req.body;
    res.render('dados.html', { nome, endereco, telefone, data });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
