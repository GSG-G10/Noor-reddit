const { join } = require('path');
const express = require('express');
const compression = require('compression');

const app = express();

app.set('port', process.env.PORT || 8000);

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));

module.exports = app;