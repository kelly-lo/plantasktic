var database = require('../public/database/database.json');

/*
 * GET login page.
 */

exports.view = function(req, res){
	res.render('login');
};