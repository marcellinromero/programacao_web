const express = require('express');
const app = express();

app.get('/somar/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = a + b;
  res.send(`A soma de ${a} e ${b} é igual a ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = a - b;
  res.send(`A subtração de ${a} e ${b} é igual a ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = a * b;
  res.send(`A multiplicação de ${a} e ${b} é igual a ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  if (b === 0) {
    res.send('Erro: Divisão por zero não é permitida.');
  } else {
    const resultado = a / b;
    res.send(`A divisão de ${a} por ${b} é igual a ${resultado}`);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
