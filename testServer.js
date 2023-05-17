"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
// ? import http 부분이 생각 했던 거와 다르다
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write("hello world!");
//   res.end();
// })
var server = http.createServer(function (req, res) {
    // !  req와 res 매개변수의 타입 주석(http.IncomingMessage 및 http.ServerResponse)
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("hello world!");
    res.end();
});
// server.listen(2222, () : void => {
//   // err를 매개변수로 두고 싶지만 에러 메세지로 호출과 일치하는 오보로드가 없습니다. 라고 문구가 뜬다.
// });
server.listen(2222, function (err) {
    if (err) {
        throw err.error;
        // console.log(err);
    }
    throw new Error("성공");
});
