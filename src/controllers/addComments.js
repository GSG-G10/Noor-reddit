const { addComment, getUserId } = require('../database/quires');

const addComments = (req, res) => {
    const username = req.cookies.username;
    const { comments, postId } = req.body;
    return getUserId(username)
        .then(
            data => {
                return addComment(data, postId, comments)
            }
        ).then(
            res.redirect('/home')
        )
}

module.exports = addComments;
