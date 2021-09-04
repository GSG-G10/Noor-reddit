const {getSignUpPage,createUser,signUp} = require('./signUp');
const {getLogin,login} = require('./login');
const getHomePage = require('./getHomePage');
const addPosts = require('./addPost');
const gettPosts = require('./gettPosts');
const getUserProfile = require('./getUserProfile');
const deletePostt = require('./deletePostt');
const addComments = require('./addComments');
const getCommentss = require('./getCommentss');




module.exports = {getSignUpPage, getLogin, createUser, signUp,login,getHomePage,addPosts,gettPosts,
    getUserProfile,deletePostt,addComments,getCommentss};