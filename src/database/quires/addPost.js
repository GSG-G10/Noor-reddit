const connection = require('../config/connection');

const addPost = (owner, title, content, Image) => {
    return connection
    .query('INSERT INTO POSTS (owner,title,content,image) VALUES ($1,$2,$3,$4) RETURNING *;',[owner,title,content,Image])
}

module.exports = addPost;