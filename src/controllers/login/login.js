const bcrypt = require('bcryptjs');
const {getUsername} = require('../../database/quires');
const { createCookie } = require('../../utilities');


const login = (req, res) => {
    const { email, password } = req.body;
    return getUsername(email)
        .then(data => {
            const username = data.username;
            bcrypt.compare(password, data.password)
                .then(data => {
                    if (data) {
                        createCookie(email,username, res);
                    } else {
                        res.status(401).send('Invalid email or password!')
                    }

                })
        })
        .catch(
            (error) => { res.status(500).send('Internal server error') }
        )
};

module.exports = login;