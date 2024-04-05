const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello From Node.js');
});

app.get('/contact', (req, res) => {
  res.send('The Contact Page');
});

app.get('/about', (req, res) => {
  res.send('The About Page');
});

app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
