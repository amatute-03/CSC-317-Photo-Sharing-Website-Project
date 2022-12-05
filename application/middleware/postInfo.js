const db = require('../conf/database');
module.exports = {
    getPostInfo: function(req, res, next) {
        db.query('select p.title, p.description, p.image, p.createdAt, u.username from posts p join users u on' +
            ' p.fk_authorId=u.id where p.id=?', [16])
            .then(function([results, fields]) {
                if(results && results.length) {
                    res.locals.results = results;
                    console.log(results)
                }
                next();
            })
            .catch(err => next(err));
    }
}