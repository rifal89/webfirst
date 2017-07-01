var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
	res.render('post', { 
		title: 'Man must explore, and this is exploration at its greatest',
		description: 'Problems look mighty small from 150 miles up'
	});
});

module.exports = router;