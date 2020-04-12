const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

// we listen on port 3000
server.listen(3000);