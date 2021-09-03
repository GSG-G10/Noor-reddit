const router = require('express').Router();
const {gettPosts, deletePostt} = require('../controllers');

router.get('/posts',gettPosts);
router.delete('/delete',deletePostt);

module.exports = router;