const connection = require('../config/connection');

const getUsername = (email) => {
    return connection
    .query('SELECT * FROM users WHERE email=$1;', [email])
    .then(data => data.rows[0])
};

module.exports = getUsername;