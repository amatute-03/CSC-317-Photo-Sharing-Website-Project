var express = require('express');
const {isLoggedIn} = require('../middleware/protectors');
const {getRecentPosts, getPostInfo, getComments} = require('../middleware/posts');
var router = express.Router();


router.get('/', getRecentPosts, function(req, res, next) {
    res.render('index', { title: 'Index', head:"Index Page"});
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login', head:"Login Page"});
});

router.get('/postimage', isLoggedIn, function(req, res, next) {
    res.render('postimage', { title: 'Post Image', head:"Post Image Page"});
});

router.get('/registration', function(req, res, next) {
    res.render('registration', { title: 'Register', head:"Registration Page"});
});

//router.get('/viewpost', function(req, res, next) {
//    res.render('viewpost', { title: 'View Post', head:"View Post Page"});
//});

router.get('/posts/:id(\\d+)', getPostInfo, getComments, function (req, res, next) {
    res.render('viewpost', { title: 'View Post', head:"View Post Page"})
})

module.exports = router;
