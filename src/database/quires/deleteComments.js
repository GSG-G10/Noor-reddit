const connection = require('../config/connection');

const deleteComments = (post_id) => {
    return connection
    .query('DELETE FROM comments WHERE post_id=$1;',[post_id])

};

module.exports = deleteComments;