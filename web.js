// web.js
var restify = require("restify");

var logfmt = require("logfmt");
var routes = require('routes');

var query = require('pg-query');
query.connectionParameters = 'postgress://xrikhvzgzccucq:U4wdycYpgITncBNcT49eXhiEUE@ec2-54-204-43-200.compute-1.amazonaws.com:5432/dcp9eo51skot7s?ssl=true';

function respond(request, response, next) {
	response.send('hello ' + request.params.name);
}

var server = restify.createServer({
  name: 'api.localboards.org'
});
server.pre(restify.pre.userAgentConnection());

for(var ndx=0;ndx < routes.paths.length;ndx++) {
	var resource = routes.paths[ndx];
	console.log( 'resource: ' + resource.name );
	// var resourcePath = new RegExp('^\/' + resource.name + '(\/[A-Z]{2})*'/* '(\/([a-zA-Z0-9_\.~-]+)*)*' */);
	// console.log( ' == main path: ' + resourcePath);
	for(var index=0;index<resource.resources.length;index++) {
		var defn = resource.resources[index];
		for(var udx=0;udx<defn.uris.length;udx++) {
			switch(defn.httpMethod) {
				case 'GET': {
					server.get('/'+defn.uris[udx].uri, eval(defn.uris[udx].method)/* routes.dispatch */);
					console.log('added ' + defn.uris[udx].uri);
				} break;
			}
			console.log(' - ' + defn.httpMethod + 
						': ' + defn.uris[udx].uri +
						': handler - ' + defn.uris[udx].method + 
						'(' + JSON.stringify(defn.uris[udx].args) + ')');
		}
	}
}

// server.get('/hello/:name', respond);
// server.head('/hello/:name', respond);
/*
server.get('/states/:name/cities', function(req, rsp, next) {
	console.log('params: ' + JSON.stringify(req.params));
	
	query("select * from states inner join cities on states.id = cities.state_id where abbreviation = $1::text",[req.params.name],
		function(err, rows, result) {
			console.log('Status: ' + err);
			
			rsp.contentType = 'json';
			rsp.send(200, rows);
			return next();
		}
	);
});
*/
server.listen(8081, function() {
	console.log('%s listening at %s', server.name, server.url);
})
