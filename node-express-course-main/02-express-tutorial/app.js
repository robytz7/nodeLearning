const http = require('http')
const server = http.createServer((req, res) =>{
    //res.writeHead(200, {'content-type' : 'text/html'})
    if(req.url === '/')
        res.end('<h1>hello first page</h1>')
    else
        res.end('hello other pages2')
    console.log('any time of request')
})

server.listen(5000)