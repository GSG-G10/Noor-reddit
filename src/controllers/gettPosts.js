const {getPosts} = require('../database/quires');

const gettPosts = (req, res) => {
    return getPosts()
    .then(
        result => res.json(result.rows)
    )
};

module.exports = gettPosts;