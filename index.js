var http = require('http')
  , fs = require('fs')
  , send = require('send')
  , ejs = require('ejs')
  , port = process.env.port || 8080

httpServer = http.createServer(function (req, res) {
  if (req.method === 'GET' && req.url ==='/') {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(ejs.render(fs.readFileSync(__dirname + '/views/index.ejs', 'utf8'), { title: 'Noob MMO' }));
  }

  send(req, req.url)
  .root(__dirname + '/public')
  .pipe(res)

}).listen(port);
