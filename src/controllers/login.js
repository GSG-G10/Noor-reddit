const {join} = require('path');

const login = (req , res) => {
    res.sendFile(join(__dirname, '..' ,'..', 'public','pages','login.html'));
}

module.exports = login;