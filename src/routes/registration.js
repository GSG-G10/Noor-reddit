const router = require('express').Router();
const { getSignUpPage, getLogin, signUp, login } = require('../controllers');
const { checkEmail } = require('../middlewares')

router.get('/signup', getSignUpPage);
router.get('/login', getLogin);
router.post('/signup', signUp);
router.post('/login', checkEmail, login)

module.exports = router;

