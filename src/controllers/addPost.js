const { addPost, getUserId } = require('../database/quires');

const addPosts = (req, res) => {
    const username = req.cookies.username;
    const { title, textarea, imgUrl } = req.body;
    return getUserId(username)
        .then(data => {
            return addPost(data, title, textarea, imgUrl)
        })
      
};

module.exports = addPosts;