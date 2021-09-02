const { readFileSync } = require('fs');
const { build } = require('joi');
const { join } = require('path');

const connection = require('./connection');


const buildDB = () => {
    const sql = readFileSync(join(__dirname, 'schema.sql')).toString();
    return connection.query(sql)
};



module.exports = buildDB;