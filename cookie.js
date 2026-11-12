const http = require('http');

const server = http.createServer((req, res) => {

    let cookies = req.headers.cookie;
    let count = 1;

    if (cookies) {
        let cookieArr = cookies.split(';');
        let countPair = cookieArr[0].split('=');
        count = parseInt(countPair[1]) + 1;
    }

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Set-Cookie': `visits=${count}`
    });

    res.end(`You visited ${count} times`);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
