const {join} = require('path');

const getHomePage = (req , res) => {
    res.sendFile(join(__dirname, '..' ,'..', 'public','pages','home.html'));
}

module.exports = getHomePage;