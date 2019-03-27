'use strict';
var http = require('http');
var fileStream = require('fs');
var express = require('express');
var app = express();
app.listen(8000);
app.use(express.static(__dirname));
var topLevelNav = [{ 'title': 'Verticle-Menu', 'id': 'verticle-menu'}, { 'title':'Horizontal Menu','id': 'horizontal-menu' }, { 'title':'Depth Menu','id':'depth-menu' }];
var secondLevelNav = [
    { 'verticle-menu': [{ 'title': 'Top', 'id': '#1' }, { 'title': 'Middle', 'id': '#2' }, { 'title':'Bottom','id' : '#3' }] },
    { 'horizontal-menu': [{ 'title': 'Left', 'id': '#1' }, { 'title': 'Center', 'id': '#2' }, { 'title':'Right','id' : '#3'}]},
    { 'depth-menu': [{ 'title': 'Back', 'id': '#1' }, { 'title': 'Middle', 'id': '#2' }, { 'title': 'Front','id' : '#3' }] }
];

app.get('/', function (request, response) {
    response.sendFile(__dirname +'/Homepage.html')
});

app.get('/topNav', function (request, response) {
    response.send(topLevelNav)
});

app.get('/secondLevelNav/:id', function (request,response) {
    response.send(secondLevelNav[request.params.id]);
});

// function onRequest(request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     let navItems;
//     if (request.url === '/topNav') {
//         response.writeHead(200, {'Content-Type':'application/json'})
//         navItems = topLevelNav;
//     }
//     // else if (request.url === '/secondLevelNav') {
//     //     request.
//     // }
//     let readStream = f)ileStream.createReadStream(__dirname + '/Homepage.html', 'utf-8');
//     readStream.pipe(response);
//     response.end(navItems);
// }

// http.createServer(onRequest).listen(8000);