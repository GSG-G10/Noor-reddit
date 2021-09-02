const connection = require('../config/connection');

const getUserId = (username) => {
    return connection
    .query('SELECT user_id FROM users WHERE username = $1;',[username])
    .then(data => {return data.rows[0].user_id})
}

module.exports = getUserId;