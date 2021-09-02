const connection = require('../../config/connection');

const checkUser = (email) => {
    return connection
    .query('SELECT email FROM users WHERE email=$1;', [email])
};

module.exports = checkUser;