const connection = require('../config/connection');

const getPosts = () => {
    return connection
    .query('SELECT posts.*,users.username FROM posts INNER JOIN users ON posts.owner=users.user_id;')
};

module.exports = getPosts;