const router = require('express').Router();

const registration = require('./registration');
const home = require('./home');
const posts = require('./posts')

router.use('/',posts);
router.use('/',home);
router.use('/', registration);

module.exports = router;