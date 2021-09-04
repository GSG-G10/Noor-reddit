const connection = require('../config/connection');

const deletePost = (post_id) => {
    return connection
    .query('DELETE FROM posts WHERE post_id=$1;',[post_id])

};

module.exports = deletePost;