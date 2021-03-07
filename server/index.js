require('dotenv').config();
const { PORT = 8080, NODE_ENV = 'development', HOST } = process.env;
const { name, version } = require('./package.json');

const express = require('express');
const pino = require('pino-http');
const cors = require('cors');

const app = express();

/* Middlewares */
app.use(pino());
app.use(cors());

app.listen(PORT, HOST, () => console.log(`✅ Server '${name} ${version}' up and running on http://${HOST}:${PORT}/api 🚀!! (Env: ${NODE_ENV})`));

// Log if the server is abruptly disconnected
process.on('SIGINT', () => {
  console.log('Server abruptly stopped');

  process.exit(0);
});