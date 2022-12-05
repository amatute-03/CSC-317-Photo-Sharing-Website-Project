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
            .catch(err => next(err));
    },

    getPostInfo: function(req, res, next) {
        let postId = req.params.id;
        let baseSQL = 'select p.title, p.description, p.image, p.createdAt, u.username from posts p join users u on p.fk_authorId=u.id where p.id=?'
        db.query(baseSQL, [postId])
            .then(function([results, fields]) {
                if(results && results.length === 1) {
                    res.locals.currentPost = results[0];
                }
                next();
            })
            .catch(err => next(err));
    }
}