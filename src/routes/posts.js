const router = require('express').Router();
const {gettPosts} = require('../controllers');

router.get('/posts',gettPosts);

module.exports = router;