var http = require('http'); // importing http module and saving it in http varibale
var fs = require('fs');
var path = require('path');

/**
 * creating a server using createServer method of http module
 */
var server = http.createServer(function (req, res) {

    var filePath = (req.url === '/') ? path.join(__dirname, 'index.html') : path.join(__dirname, req.url);

    fs.readFile(filePath, function (err, data) {
        if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('file not found');
        } else {
            res.writeHead(200, { 'Content-Type': req.headers.accept });
            res.end(data);
        }

    });
    
});


/**
 * created serever is listing on mentioned port
 */
server.listen(3500, function () {
    console.log(" I am listening on port 3000")
});




