const router = require('express').Router();
const {getUserProfile} = require('../controllers');

router.get('/:user',getUserProfile);

module.exports = router;