const router = require('express').Router();
const{getHomePage,addPosts} = require('../controllers');

router.get('/home',getHomePage);
router.post('/home', addPosts);

module.exports = router;

