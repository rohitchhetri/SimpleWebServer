//Create a variable http 
const http = require('http');

//Create a variable for hostname 
const hostname = '127.0.0.1';

//Create a variable for port 
const port = 3000;

//create   a varialble server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Web Server');
})

//server listen...
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});


