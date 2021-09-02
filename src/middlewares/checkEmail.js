const { checkUser } = require('../database/quires/signUpQuires');

const checkEmail = (req, res, next) => {
    const { email } = req.body;
    return checkUser(email)
        .then(
            data => {
                if (data.rows.length === 0) {
                    res.send('User does not exist');
                } else {
                    next();
                }
            }
        )


}

module.exports = checkEmail;