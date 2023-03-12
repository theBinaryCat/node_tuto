const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) =>{
    console.log(req.method) //type the req method: (GET)
    const url = req.url  

    //home page
    if(url === '/')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }

    //about page
    else if(url ==='/about')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }

    //page npt found
    else 
    {
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
    
})

server.listen(5000)
