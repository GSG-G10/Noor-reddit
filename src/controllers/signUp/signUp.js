const {checkUser} = require('../../database/quires');
const createUser = require('./createUser');
const{createCookie} = require('../../utilities');


const signUp = (req, res) => {
    const { userName, firstName, lastName, email, password} = req.body;
    return checkUser(email)
      .then(data =>{ 
          if(data.rows.length === 0){
            createCookie(email,res);
            createUser(userName, firstName, lastName, email, password);
          }else{
            res.json('User is already exists. Try to log in!')
          }
      })
  }


module.exports = signUp;

