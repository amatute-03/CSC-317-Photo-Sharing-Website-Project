const express = require('express');
const router = express.Router();
const db = require('../conf/database');

router.post('/create', function (req, res, next) {
    if(!req.session.userID) {
        res.json( {
            status: 'error',
            message: 'You must be logged in to comment'
        })
    } else {
        let {comment, postId} = req.body;
        let {userID, username} = req.session;
        db.execute('insert into comments (text, fk_authorId, fk_postId) value (?,?,?)', [comment, userID, postId])
            .then(function ([results, fields]) {
                if (results && results.affectedRows === 1) {
                    res.json({
                        status: "success",
                        message: "comment successfully created",
                        data: {
                            comment: comment,
                            username: username,
                            commentId: results.insertId
                        }
                    })
                } else {
                    res.json({
                        status: "error",
                        message: "comment could not be created"
                    })
                }
            })
    }
})

module.exports = router;