//import path from 'path';

exports.init = function(app) {

	/*app.get('/', (req, res) => {
		res.sendFile(path.resolve('app/ejemplo4.html'));
	});*/

  	app.get('/rest/nav',function(req,res){
    	var navJson = require('../data/nav.json');
        return res.json( navJson );
    });
};
