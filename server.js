const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const projectRouter = require('./data/helpers/projectRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.use('/api/project', projectRouter);

module.exports = server;