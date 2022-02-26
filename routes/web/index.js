var express = require('express');
var router = express.Router();

/**
 * Home page
 * 
 */
router.get('/', function(req, res, next) {
	res.render('pages/index', { 
		title: 'Buy any Course!'
	});
});

module.exports = router;