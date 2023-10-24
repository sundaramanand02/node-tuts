const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const p = req.url;
    if (p === '/') {
        res.write('Home page');
    } else if (p === '/about') {
        res.write('About');
    } else {
        res.write('Oops');
    }
    res.end();
})

server.listen(5000);