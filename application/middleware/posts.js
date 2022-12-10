const db = require('../conf/database');
module.exports = {
    getRecentPosts: function(req, res, next) {
        db.query('select id, title, description, thumbnail from posts order by createdAt desc limit 10')
            .then(function([results, fields]) {
                if(results && results.length) {
                    res.locals.results = results;
                }
                next();
            })
            .catch(err => {res.redirect('/index'); next(err)});
    },

    getPostInfo: function(req, res, next) {
        let postId = req.params.id;
        let baseSQL = 'select p.id, p.title, p.description, p.image, p.createdAt, u.username from posts p join users u on p.fk_authorId=u.id where p.id=?'
        db.query(baseSQL, [postId])
            .then(function([results, fields]) {
                if(results && results.length === 1) {
                    res.locals.currentPost = results[0];
                } else {
                    throw new Error('post could not be found')
                }
                next();
            })
            .catch(err => {
                req.flash('error', 'post not found');
                req.session.save(function(saveErr){res.render('index', {title: 'Posts', head:"Post Not Found"})})
            });
    },

    getComments: function(req, res, next) {
        let postId = req.params.id;
        let baseSQL = "select c.id, c.text, c.createdAt, u.username from comments c join users u on c.fk_authorId=u.id where fk_postId=? order by c.createdAt desc"
        db.execute(baseSQL, [postId])
            .then(function([results, fields]) {
                if(results && results.length > 0) {
                    res.locals.currentPost.comments = results;
                    res.locals.currentPost.length = results.length
                }
                next();
            })
            .catch(err => {res.redirect('/index'); next(err)})

    }

}