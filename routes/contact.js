var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
	res.render('contact', { 
		title: 'Contact Me',
		description: 'Have questions? I have answers (maybe).'
	});
});

module.exports = router;