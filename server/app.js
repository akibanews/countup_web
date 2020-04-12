const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>CountUp first Page</title></head>');
    res.write('<body><h1>Hello from Node.js</h1><body>');
    res.write('</html>');
    res.end();
});

// we listen on port 3000
server.listen(3000);