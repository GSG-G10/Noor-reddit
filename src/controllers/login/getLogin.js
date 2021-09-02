const {join} = require('path');

const getLogin = (req , res) => {
    res.sendFile(join(__dirname, '..','..' ,'..', 'public','pages','login.html'));
}

module.exports = getLogin;