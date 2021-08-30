const {join} = require('path');

const signUp = (req , res) => {
    res.sendFile(join(__dirname, '..' ,'..', 'public','pages','signUp.html'));
}

module.exports = signUp;