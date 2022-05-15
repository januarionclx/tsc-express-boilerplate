// Enviroment
require('dotenv').config();

// Includes
import express from 'express';
const app = express();

// config
const PORT = process.env.PORT || 3000;

// Main
app.get('/ping', (_, res) => {
  res.end('pong');
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});