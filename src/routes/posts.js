const router = require('express').Router();
const {gettPosts, deletePostt,addComments} = require('../controllers');

router.get('/posts',gettPosts);
router.delete('/delete',deletePostt);
router.post('/comment',addComments);

module.exports = router;