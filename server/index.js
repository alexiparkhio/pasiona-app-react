require('dotenv').config();
const { PORT = 8080, NODE_ENV = 'development', HOST, MONGODB_URL } = process.env;
const { name, version } = require('./package.json');
const { router } = require('./routes');
const { mongoose } = require('./db');

const express = require('express');
const pino = require('pino-http');
const cors = require('cors');

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    const app = express();

    /* Middlewares */
    app.use(pino({
      prettyPrint: { colorize: true }
    }));
    app.use(cors());

    /* API routing directory */
    app.use('/api', router);

    /* API initialization with message on success */
    app.listen(PORT, HOST, () => console.log(`✅ Server '${name} ${version}' up and running on http://${HOST}:${PORT}/api 🚀!! (Env: ${NODE_ENV})`));

    // Log if the server is abruptly disconnected
    process.on('SIGINT', () => {
      console.log('Server abruptly stopped');

      process.exit(0);
    });
  })
