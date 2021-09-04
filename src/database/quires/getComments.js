const connection = require('../config/connection');

const getComments = () => {
    return connection
    .query('SELECT comments.*,users.username FROM comments INNER JOIN users ON comments.owner=users.user_id;')
};

module.exports = getComments;