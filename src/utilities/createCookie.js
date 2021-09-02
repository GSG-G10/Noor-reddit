const jwt = require('jsonwebtoken');
require('env2')('.env');

const createCookie = (email, res) => {
    jwt.sign({ LoggedEmail: email }, process.env.SECRETKEY, (error, token) => {
        if (error) {
            res.send('Internal Server errors!')
        } else {
            res.cookie("token", token, { httponly: true, secure: true });
            res.redirect('/');
        }
    })

};


module.exports = createCookie;