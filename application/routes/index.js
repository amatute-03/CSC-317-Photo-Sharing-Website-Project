var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Index', head:"Index Page"});
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login', head:"Login Page"});
});

router.get('/postimage', function(req, res, next) {
    res.render('postimage', { title: 'Post Image', head:"Post Image Page"});
});

router.get('/registration', function(req, res, next) {
    res.render('registration', { title: 'Register', head:"Registration Page"});
});

router.get('/viewpost', function(req, res, next) {
    res.render('viewpost', { title: 'View Post', head:"View Post Page"});
});

module.exports = router;
