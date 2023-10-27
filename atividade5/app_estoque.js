const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.json());


const estoque = [];


app.post('/api/estoque/cadastrar', (req, res) => {
  const { id, nome, qtd } = req.body;
  estoque.push({ id, nome, qtd });
  res.json({ message: 'Item adicionado ao estoque com sucesso!' });
});


app.get('/api/estoque/listar', (req, res) => {
  res.json(estoque);
});


app.put('/api/estoque/editar/:id', (req, res) => {
  const id = req.params.id;
  const qtd = req.body.qtd;
  const item = estoque.find((item) => item.id === id);

  if (item) {
    item.qtd = qtd;
    res.json({ message: 'Quantidade atualizada com sucesso!' });
  } else {
    res.status(404).json({ error: 'Item não encontrado' });
  }
});


app.delete('/api/estoque/remover/:id', (req, res) => {
  const id = req.params.id;
  const index = estoque.findIndex((item) => item.id === id);

  if (index !== -1) {
    estoque.splice(index, 1);
    res.json({ message: 'Item removido do estoque com sucesso!' });
  } else {
    res.status(404).json({ error: 'Item não encontrado' });
  }
});

app.listen(port, () => {
  console.log(`Aplicação de gerenciamento de estoque rodando na porta ${port}`);
});
