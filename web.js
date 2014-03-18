// web.js
var restify = require("restify");
var logfmt = require("logfmt");
var routes = require('routes');

var server = restify.createServer({
  name: 'api.localboards.org'
});

// keep curl from retaining the connection with 'keep-alive' setting.
// could be useful in other applications, but not for this one.
server.pre(restify.pre.userAgentConnection());

//
// setup all of the routes that this api will listen for.
for(var ndx=0;ndx < routes.paths.length;ndx++) {
	var resource = routes.paths[ndx];
	console.log( 'resource: ' + resource.name );
	for(var index=0;index<resource.resources.length;index++) {
		var defn = resource.resources[index];
		for(var udx=0;udx<defn.uris.length;udx++) {
			switch(defn.httpMethod) {
				case 'GET': {
					server.get('/'+defn.uris[udx].uri, defn.uris[udx].method); // routes.dispatch
					console.log('added ' + defn.uris[udx].uri);
				} break;
			}
			console.log(' - ' + defn.httpMethod + 
						': ' + defn.uris[udx].uri +
						': handler(' + JSON.stringify(defn.uris[udx].args) + ')');
		}
	}
}

server.listen(routes.port, function() {
	console.log('%s listening at %s', server.name, server.url);
})
