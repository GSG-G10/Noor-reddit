const {addUser, checkUser} = require('./signUpQuires');
const getPassword = require('./getPassword');
const getUsername = require('./getUsername');
const addPost = require('./addPost')
const getUserId = require('./getUserId');
const getPosts = require('./getPosts');
const deletePost = require('./deletePost');


module.exports = {addUser, checkUser, getPassword,getUsername,getUserId,addPost,getPosts,deletePost};