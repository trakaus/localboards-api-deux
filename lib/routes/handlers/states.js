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
// node_modules/routes/lib/states.js
// @author: Ryan Walker [w.ryan.walker@gmail.com]

var lbns = require('../../namespace');

;(function(_namespace) {
	_namespace.routes.handlers.states = {
		list: function( request, response, callback ) {
			console.log('States.list was executed!');

			response.contentType = 'json';
			response.send(200, {thank_you:'State.list: Thank you for your help!'});
			return callback();
		},
		
		single: function( request, response, callback ) {
			var id = request.params.state_identifier;
			
			if( isNaN(id) ) {
				console.log('State[' + id + ']: is a string!');
			} else if( Number(id) >= 0 ) {
				console.log('State[' + id + ']: is a number!');
			} else {
				var objType = typeof id;
				return callback({error: 'InvalidArgumentError', message: 'Handler for type( ' + objType + ') not found!'});
			}
	
			response.contentType = 'json';
			response.send(200, {thank_you:'State.single: Thank you for your help!'});
			return callback();
		}
	};
	
	_namespace.routes.paths.push({ 
			name: 'states',
			resources: [
				{
					httpMethod: 'GET',
					uris: [
						{
							uri: {path: '/states', version: _namespace.routes.versions.api_version_0_9_0}, 
							method: _namespace.routes.handlers.states.list,
							args: []
						}, { 
							uri: {path: '/states/:state_identifier', version: _namespace.routes.versions.api_version_0_9_0}, 
							method: _namespace.routes.handlers.states.single,
							args: ['state_identifier']
						}
					]
				}
			]
		});
})(lbns);