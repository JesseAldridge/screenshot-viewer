const connect = require('connect');
const http = require('http');

const serveStatic = require('serve-static')
const static = serveStatic('screenshots')

const app = connect();


app.use(function(req, res, next) {
  static(req, res, next)
})

app.use(function(req, res){
  res.setHeader('content-type', 'text/html');
  res.end('"2019-01-02_09.34.43.png"<img src="2019-01-02_09.34.43.png">');
});

console.log('serving on port 3000');
http.createServer(app).listen(3000);
