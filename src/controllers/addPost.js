const { addPost, getUserId } = require('../database/quires');

const addPosts = (req, res) => {
    const username = req.cookies.username;
    const { title, postText, imgUrl } = req.body;
    return getUserId(username)
        .then(data => {
            return addPost(data, title, postText, imgUrl)
        })
        .then(
            res.redirect('/home')
        )
        .catch(err => res.json({ message: 'internal server error' }));
};

module.exports = addPosts;