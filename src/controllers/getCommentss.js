const {getComments} = require('../database/quires');

const getCommentss = (req, res) => {
    return getComments()
    .then(
        result => res.json(result.rows)
    )
};

module.exports = getCommentss;