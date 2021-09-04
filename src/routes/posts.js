const router = require('express').Router();
const {gettPosts, deletePostt,addComments,getCommentss} = require('../controllers');

router.get('/posts',gettPosts);
router.delete('/delete',deletePostt);
router.post('/comment',addComments);
router.get('/comment',getCommentss);

module.exports = router;