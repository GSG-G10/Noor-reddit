const bcrypt = require('bcryptjs');
const {addUser} = require('../../database/quires');

const createUser = (username, firstName, lastName,email,password) => {
    return bcrypt.hash(password, 10)
           .then((hashedPassword) => addUser(username, firstName, lastName,email,hashedPassword))
};


module.exports = createUser;