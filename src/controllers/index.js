const {getSignUpPage,createUser,signUp} = require('./signUp');
const {getLogin,login} = require('./login');
const getHomePage = require('./getHomePage');
const addPosts = require('./addPost');
const gettPosts = require('./gettPosts');



module.exports = {getSignUpPage, getLogin, createUser, signUp,login,getHomePage,addPosts,gettPosts};