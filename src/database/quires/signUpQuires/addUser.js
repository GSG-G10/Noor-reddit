const connection = require('../../config/connection');

const addUser = (userName, firstName, lastName, email, password) => {
    return connection 
    .query('INSERT INTO users (userName, first_name, last_name, email, password) VALUES ($1, $2, $3, $4, $5);', [userName, firstName, lastName, email, password])
}


module.exports = addUser;