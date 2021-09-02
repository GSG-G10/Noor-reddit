const {sign} = require('jsonwebtoken');
require('env2')('.env');

const createCookie = (email,username, res) => {
     sign({ LoggedEmail: email }, process.env.SECRETKEY, (error, token) => {
        if (error) {
            res.send('Internal Server errors!')
        } else {
            res.cookie("token", token, { httponly: true, secure: true });
            res.cookie("username",username)
            res.redirect('/home');
        }
    })

};


module.exports = createCookie;