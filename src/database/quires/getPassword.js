const connection = require('../config/connection');

const getPassword = (email) => {
    return connection
    .query('SELECT password FROM users WHERE email=$1;',[email])
};

module.exports = getPassword;