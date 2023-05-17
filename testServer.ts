import * as http from 'http';
// ? import http 부분이 생각 했던 거와 다르다
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write("hello world!");
//   res.end();
// })

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  // !  req와 res 매개변수의 타입 주석(http.IncomingMessage 및 http.ServerResponse)
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write("hello world!");
  res.end();
});



server.listen(2222, (err: Error | object) => {
  // err를 매개변수로 두고 싶지만 에러 메세지로 호출과 일치하는 오보로드가 없습니다. 라고 문구가 뜬다.
  if (err) {
    console.log(err);
  }
  else {
    console.log('성공');
  }
});