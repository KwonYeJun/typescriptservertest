"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("hello world!");
    res.end();
});
server.listen(2222, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('성공');
    }
});
