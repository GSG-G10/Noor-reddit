const router = require('express').Router();
const {signUp, login} = require('../controllers');

router.get('/signup', signUp);
router.get('/login', login);

module.exports = router;

