const http = require('http');

const server = http.createServer((req,res) =>{
	res.writeHead(200,{
		'Content-Type':'Text/Plain'	
	});
	res.end('Hello World from Node.js Server');
});

server.listen(3000, () => {
	console.log('Server running at http://localhost:3000');
});
