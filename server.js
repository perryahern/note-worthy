const express = require('express');
const bodyParser = require('body-parser');

const server = express();
server.use(bodyParser.json());

const Note = require('./note.js');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});