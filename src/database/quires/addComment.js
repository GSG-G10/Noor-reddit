const connection = require('../config/connection');

const addComment = (owner, post, content) => {
    return connection
    .query('INSERT INTO COMMENTS (owner,post_id,content) VALUES ($1,$2,$3) RETURNING *;',[owner,post,content])
}

module.exports = addComment;