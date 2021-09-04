const {deletePost,deleteComments} = require('../database/quires');

const deletePostt = (req,res) => {
      const {postId} = req.body;
      return deleteComments(postId)
      .then(
        () => {
            return deletePost(postId)
        }
      )
      .then(
          res.redirect('/home')
      )
      .catch(err => res.json({ message: 'internal server error' }));
}

module.exports = deletePostt;