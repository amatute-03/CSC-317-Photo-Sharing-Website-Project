const express = require('express');
const router = express.Router();
const db = require('../conf/database');
const sharp = require('sharp');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'public/images/uploads')
    },
    filename: function (req, file, cb) {
        let fileExt = file.mimetype.split('/')[1];
        cb(null, file.fieldname + '-' + Date.now() + '-' + Math.round(Math.random() * 1E9) + '.' + fileExt)
    }
})

const upload = multer({storage: storage})

router.post('/create', upload.single('uploadImage'), function (req, res, next) {
    let uploadedFile = req.file.path;
    let thumbnailName = 'thumbnail-' + req.file.filename;
    let destinationOfThumbnail = req.file.destination + '/' + thumbnailName;
    const {title, description} = req.body;
    const userId = req.session.userID;

    sharp(uploadedFile)
        //.resize(200)
        .resize({width:200, height:200, fit:"cover"})
        .toFile(destinationOfThumbnail)
        .then(function() {
            let baseSQL = 'insert into posts (title, description, image, thumbnail, fk_authorId) value (?,?,?,?,?)'
            return db.query(baseSQL, [title, description, uploadedFile, destinationOfThumbnail, userId])
        })
        .then(function([results, fields]) {
            if(results && results.affectedRows) {
                req.flash('success', 'Your post has been created!')
                req.session.save(function(saveErr) {
                    res.redirect('/');
                })
            }
        })
        .catch(err => next(err))
})

router.get('/search', function (req, res, next) {
    let searchTerm = '%'+req.query.searchText+'%';
    let originalTerm = req.query.searchText;
    console.log(searchTerm)
    let baseSQL = "select id, title, description, thumbnail, concat_ws(\" \", title, description) as haystack from csc317db.posts having haystack like ?"
    db.execute(baseSQL, [searchTerm])
        .then(function ([results, fields]) {
            res.locals.results = results
            res.locals.searchValue = originalTerm
            req.flash('success', results.length + ' results found')
            req.session.save(function(saveErr){res.render('index', { title: 'Posts', head:"Searched Posts"})})
        })
        .catch(err => next(err));
})



module.exports = router;