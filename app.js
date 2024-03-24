const http = require('http');

// Create a server object
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Welcome to America!');
    res.end();
}).listen(3000, '0.0.0.0'); // Listen on all IPs on port 3000

console.log('Server running at http://0.0.0.0:3000/');
