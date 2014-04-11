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
// node_modules/routes/lib/cities.js
// @author: Ryan Walker [w.ryan.walker@gmail.com]

var lbns = require('../../namespace');

;(function(_namespace) {
	_namespace.routes.handlers.cities = {
		list: function( request, response, callback ) {
			console.log('cities.list was executed!');

			response.contentType = 'json';
			response.send(200, {thank_you:'State.single: Thank you for your help!'});
			return callback();
		},
		
		single: function( request, response, callback ) {
			var id = request.params.state_identifier;

			var queryParams = [id];
			var querySyntax = "select * from states inner join cities on states.id = cities.state_id"
			
			if( isNaN(id) ) {
				console.log('State[' + id + ']: is a string!');
				querySyntax += " where states.abbreviation = $1::text";
			} else if( Number(id) >= 0 ) {
				console.log('State[' + id + ']: is a number!');
				querySyntax += " where states.id = $1";
			} else {
				var objType = typeof id;
				return callback({error: 'InvalidArgumentError', message: 'Handler for type( ' + objType + ') not found!'});
			}
	
			var childid = request.params.city_identifier;
			if(typeof childid === 'undefined') {
				console.log('State[' + id + ']: all cities have been requested!');
			} else {
				console.log('State[' + id + ']: city identifier: ' + childid);
				querySyntax += " and cities.id = $2";
				queryParams.push(childid);
			}
	
			//
			// for grins and giggles, display the query.
			console.log(querySyntax + ', params: ' + JSON.stringify(queryParams));
			
			//
			// return garbage for now.
			response.contentType = 'json';
			response.send(200, {thank_you:'State.single: Thank you for your help!'});
			return callback();
			
			/**
			 * use this code when ready to link the actual database call. probably want to
			 * encapsulate this somewhere else, not sure yet.
			 *

			var query = require('pg-query');
			query.connectionParameters = '** removed, look up value **';
			query(dbQueryString, queryParams,
				function(err, rows, result) {
					console.log('Status: ' + err);
					
					rsp.contentType = 'json';
					rsp.send(200, rows);
					return next();
				}
			);
			*/
			 
		},
		
		create: function( request, response, callback ) {
			console.log('cities.create was executed!');
			
			res.send(new BadRequestError('Method not yet implimented!'));
		},
		
		update: function( request, response, callback ) {
			console.log('cities.update was executed!');
			
			res.send(new BadRequestError('Method not yet implimented!'));
		},
		
		delete: function( request, response, callback ) {
			console.log('cities.delete was executed!');
			
			res.send(new BadRequestError('Method not yet implimented!'));
		}		
	};
	
	_namespace.routes.paths.push({
			name: 'cities',
			resources: [
				{
					httpMethod: 'GET',
					uris: [
						{ 
							uri: {path: '/states/:state_identifier/cities', version: _namespace.routes.versions.api_version_0_9_0}, 
							method: _namespace.routes.handlers.cities.list,
							args: ['state_identifier','child_resource']
						}, { 
							uri: {path: '/states/:state_identifier/cities/:city_identifier', version: _namespace.routes.versions.api_version_0_9_0}, 
							method: _namespace.routes.handlers.cities.single,
							args: ['state_identifier','city_identifier']
						}
					]
				}, {
					httpMethod: 'PUT',
					uris: [
						{
							uri: {path: '/states/:state_identifier/cities/:child_identifier', version: _namespace.routes.versions.api_version_0_9_0}, 
							method: _namespace.routes.handlers.cities.update,
							args: ['identifier','child_identifier']
						}
					]
				}, {
					httpMethod: 'POST',
					uris: [
						{	uri: {path: '/states/:state_identifier/cities', version: _namespace.routes.versions.api_version_0_9_0}, 
							method: _namespace.routes.handlers.cities.create, 
							args: ['identifier']
						}
					]
				}, {
					httpMethod: 'DELETE',
					uris: []
				}
			]
		});
})(lbns);