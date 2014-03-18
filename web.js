/***************************************************************************
The MIT License (MIT)

Copyright (c) 2014 LocalBoards.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
****************************************************************************/
// web.js
// @author: Ryan Walker [w.ryan.walker@gmail.com]

var restify = require("restify");
var logfmt = require("logfmt");
var routes = require('./lib/routes');

var server = restify.createServer({
  name: 'api.localboards.org'
});

// keep curl from retaining the connection with 'keep-alive' setting.
// could be useful in other applications, but not for this one.
server.pre(restify.pre.userAgentConnection());

// if a version is not provided via [accept-version:] header, 
// add the default here. this will allow the api to have upgrades
// without causing major issues. just extend the routes with new
// handlers specifying a new version accept-version value.
// [see routes/lib/index.js for details.]
server.pre(function(request, response, next) {
	if( request.headers['accept-version'] === undefined ) {
		request.headers['accept-version'] = '0.9.0';
	}
	
	return next();
});

// tell restify that you want your query params available
// from the req.query object.
server.use(restify.queryParser());

// tell restify how to handle posted objects.
// server.use(restify.bodyParser()); // uncomment to map each variable to req.params.
// -- be sure to comment out the following server.use() call if you use the above option! --
// to have the object returned within a single object req.body,
server.use(restify.bodyParser({ mapParams: false })); // mapped in req.body as a single object.

//
// setup all of the routes that this api will listen for.
for(var ndx=0;ndx < routes.paths.length;ndx++) {
	var resource = routes.paths[ndx];
	console.log( 'resource: ' + resource.name );
	for(var index=0;index<resource.resources.length;index++) {
		var defn = resource.resources[index];
		for(var udx=0;udx<defn.uris.length;udx++) {
			switch(defn.httpMethod) {
				case 'HEAD': {
					server.head(defn.uris[udx].uri, defn.uris[udx].method);
				} break;
				
				case 'GET': {
					server.get(defn.uris[udx].uri, defn.uris[udx].method);
				} break;
				
				// TODO: support for operations from within a browser page [OPTIONS] support

				case 'POST': {
					server.post(defn.uris[udx].uri, defn.uris[udx].method);
				} break;
				
				case 'PUT': {
					server.put(defn.uris[udx].uri, defn.uris[udx].method);
				} break;
				
				case 'DELETE': {
					server.del(defn.uris[udx].uri, defn.uris[udx].method);
				} break;
			}

			console.log(' - ' + defn.httpMethod + 
						': ' + defn.uris[udx].uri.path +
						': handler(' + JSON.stringify(defn.uris[udx].args) + ')');
		}
	}
}

server.listen(routes.port, function() {
	console.log('%s listening at %s', server.name, server.url);
})


