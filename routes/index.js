var multer  = require('multer');
var upload = multer({ });
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {fileSize: ""});
});

router.post('/api/fileanalyse/', upload.single("data"), function(req, res, next) {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    fileSize: req.file.size});
  
});

router.get('*', function(req, res, next) {
  res.sendStatus(404);
});



module.exports = router;
