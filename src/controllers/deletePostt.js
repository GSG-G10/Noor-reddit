const {deletePost} = require('../database/quires');

const deletePostt = (req,res) => {
      const {postId} = req.body;
      return deletePost(postId)
      .then(
          res.redirect('/home')
      )
      .catch(err => res.json({ message: 'internal server error' }));
}

module.exports = deletePostt;