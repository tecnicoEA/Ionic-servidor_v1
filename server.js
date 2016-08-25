var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');


var jwt    = require('jsonwebtoken'); 
var config = require('./config');


var port = process.env.PORT || 8080;
app.set('superSecret', config.secret); // Revisar fichero config.secret

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// ---------------------------------------------------------
// get an instance of the router for api routes
// ---------------------------------------------------------
var apiRoutes = express.Router(); 


// ---------------------------------------------------------
// authentication (no middleware necessary since this isnt authenticated)
// ---------------------------------------------------------
// http://localhost:8080/api/authenticate
apiRoutes.post('/authenticate', function(req, res) {

	res.json({
		success: true,
		message: 'Enjoy your token!',
		token: 'token'
	});
	
});



/*

// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
apiRoutes.use(function(req, res, next) {

	// check header or url parameters or post parameters for token
	var token = req.body.token || req.param('token') || req.headers['x-access-token'];

	// decode token
	if (token) {

		// verifies secret and checks exp
		jwt.verify(token, app.get('superSecret'), function(err, decoded) {			
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });		
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;	
				next();
			}
		});


	} else {

		// if there is no token
		// return an error
		return res.status(403).send({ 
			success: false, 
			message: 'No token provided.'
		});
		
	}
	
});





// ---------------------------------------------------------
// authenticated routes
// ---------------------------------------------------------
apiRoutes.get('/clima', function(req, res) {
	res.json({ message: 'Welcome to the coolest API on earth!' });
});




app.use('/api', apiRoutes);


*/






// =================================================================
// start the server ================================================
// =================================================================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);








app.listen(port);
console.log('Magic happens at http://192.168.1.100:' + port);

