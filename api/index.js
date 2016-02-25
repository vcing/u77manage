var router   = require('express').Router();
var page = require('./page.js');
var AV = require('./config/av.js');

global.Chart = AV.Object.extend('Chart');

router.use('/page',page);

module.exports = router;