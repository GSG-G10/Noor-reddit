const {join} = require('path');

const getUserProfile = (req , res) => {
    res.sendFile(join(__dirname, '..' ,'..', 'public','pages','profile.html'));
}

module.exports = getUserProfile;