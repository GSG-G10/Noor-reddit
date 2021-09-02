const { addPost, getUserId } = require('../database/quires');

const addPosts = (req, res) => {
    const username = req.cookies.username;
    const { title, postContainer, imgUrl } = req.body;
    return getUserId(username)
        .then(data => {
            return addPost(data, title, postContainer, imgUrl)
        }).catch(
            res.json('Internal Server Error')
        )
};

module.exports = addPosts;