var pg = require('pg');

exports.save= function(req, res, next) {
	//Syntax pg://<username>:<pass>@<domain>:<port>/<db>
	var connString = "pg://postgres:1@127.0.0.1:5432/NodeJS";
	pg.connect(connString, 
		function(err, client, done) {
			if(err) console.log(err);
			else {			
				client.query('INSERT INTO surveyanswers(value) VALUES($1)',[req.body.ansName]);
				client.query('INSERT INTO surveyanswers(value) VALUES($1)',[req.body.ansAge]);
				client.query('INSERT INTO surveyanswers(value) VALUES($1)',[req.body.ansAsst]);
			}
			done();
		}
	);
	next();
}
