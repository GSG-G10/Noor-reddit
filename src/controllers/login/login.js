const bcrypt = require('bcryptjs');
const { getPassword } = require('../../database/quires');
const { createCookie } = require('../../utilities');

const login = (req, res) => {
    const { email, password } = req.body;

    return getPassword(email)
        .then(data => {
            bcrypt.compare(password, data.rows[0].password)
                .then(data => {
                    if (data) {
                        createCookie(email, res);
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