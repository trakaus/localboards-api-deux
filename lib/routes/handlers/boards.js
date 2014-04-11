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
	_namespace.routes.handlers.boards = {
		list: function( request, response, callback ) {
			res.send(new BadRequestError('Method not yet implimented!'));
			return callback();
		},
		
		single: function( request, response, callback ) {
			res.send(new BadRequestError('Method not yet implimented!'));
			return callback();
		},
		
		create: function( request, response, callback ) {
			res.send(new BadRequestError('Method not yet implimented!'));
			return callback();
		},
		
		update: function( request, response, callback ) {
			res.send(new BadRequestError('Method not yet implimented!'));
			return callback();
		},
		
		delete: function( request, response, callback ) {
			res.send(new BadRequestError('Method not yet implimented!'));
			return callback();
		},
		
		seats: {
			list: function( request, response, callback ) {
				res.send(new BadRequestError('Method not yet implimented!'));
				return callback();
			},
			
			single: function( request, response, callback ) {
				res.send(new BadRequestError('Method not yet implimented!'));
				return callback();
			},
			
			create: function( request, response, callback ) {
				res.send(new BadRequestError('Method not yet implimented!'));
				return callback();
			},
			
			update: function( request, response, callback ) {
				res.send(new BadRequestError('Method not yet implimented!'));
				return callback();
			},
			
			delete: function( request, response, callback ) {
				res.send(new BadRequestError('Method not yet implimented!'));
				return callback();
			}
		},
		
		departmenets: {
			list: function( request, response, callback ) {
				res.send(new BadRequestError('Method not yet implimented!'));
				return callback();
			},
			
			single: function( request, response, callback ) {
				res.send(new BadRequestError('Method not yet implimented!'));
				return callback();
			},
			
			create: function( request, response, callback ) {
				res.send(new BadRequestError('Method not yet implimented!'));
				return callback();
			},
			
			update: function( request, response, callback ) {
				res.send(new BadRequestError('Method not yet implimented!'));
				return callback();
			},
			
			delete: function( request, response, callback ) {
				res.send(new BadRequestError('Method not yet implimented!'));
				return callback();
			}
		},
		
		members: {
			list: function( request, response, callback ) {
				res.send(new BadRequestError('Method not yet implimented!'));
				return callback();
			},
			
			single: function( request, response, callback ) {
				res.send(new BadRequestError('Method not yet implimented!'));
				return callback();
			},
			
			create: function( request, response, callback ) {
				res.send(new BadRequestError('Method not yet implimented!'));
				return callback();
			},
			
			update: function( request, response, callback ) {
				res.send(new BadRequestError('Method not yet implimented!'));
				return callback();
			},
			
			delete: function( request, response, callback ) {
				res.send(new BadRequestError('Method not yet implimented!'));
				return callback();
			}
		}
	};
	
	_namespace.routes.paths.push({
		name: 'boards',
		resources: [
			{
				httpMethod: 'GET',
				uris: []
			}, {
				httpMethod: 'PUT',
				uris: []
			}, {
				httpMethod: 'POST',
				uris: []
			}, {
				httpMethod: 'DELETE',
				uris: []
			}
		]
	});
	
	_namespace.routes.paths.push({
		name: 'board-seats',
		resources: [
			{
				httpMethod: 'GET',
				uris: []
			}, {
				httpMethod: 'PUT',
				uris: []
			}, {
				httpMethod: 'POST',
				uris: []
			}, {
				httpMethod: 'DELETE',
				uris: []
			}
		]
	});
	
	_namespace.routes.paths.push({
		name: 'board-departments',
		resources: [
			{
				httpMethod: 'GET',
				uris: []
			}, {
				httpMethod: 'PUT',
				uris: []
			}, {
				httpMethod: 'POST',
				uris: []
			}, {
				httpMethod: 'DELETE',
				uris: []
			}
		]
	});
	
	_namespace.routes.paths.push({
		name: 'board-members',
		resources: [
			{
				httpMethod: 'GET',
				uris: []
			}, {
				httpMethod: 'PUT',
				uris: []
			}, {
				httpMethod: 'POST',
				uris: []
			}, {
				httpMethod: 'DELETE',
				uris: []
			}
		]
	});
})(lbns);
