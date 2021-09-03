const router = require('express').Router();

const registration = require('./registration');
const home = require('./home');
const posts = require('./posts');
const user = require('./user');

router.use('/user',user)
router.use('/',posts);
router.use('/',home);
router.use('/', registration);

module.exports = router;