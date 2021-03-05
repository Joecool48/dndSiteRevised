var http = require('http')
var fs = require('fs').promises
var path = require('path')


const host = 'localhost'
const port = 8000
const dir = "public"

const requestListener = function(req, res) {
        if (req.url === "/") {
            fs.readFile(path.join(__dirname, "/" + dir, "/index.html"))
            .then(content => {
                res.writeHead(200, {"Content-Type": "text/html"})
                res.end(content)
            }).catch(err => {
                res.writeHead(500)
                res.end(err.toString())
                return
            })
        }
        else if(req.url.match("\.css$")) {
            fs.readFile(path.join(__dirname, "/" + dir, req.url))
            .then((content) => {
                res.writeHead(200, {"Content-Type": "text/css"})
                res.end(content)
            }).catch(err => {
                res.writeHead(500)
                res.end(err.toString())
                return
            })
        }
        else if (req.url.match("\.js$")) {
            fs.readFile(path.join(__dirname, "/" + dir, req.url))
            .then((content) => {
                res.writeHead(200, {"Content-Type": "text/javascript"})
                res.end(content) 
            }).catch(err => {
                res.writeHead(500)
                res.end(err.toString())
            })
        }
        else if (req.url.match("\.jpg$")) {
            fs.readFile(path.join(__dirname, "/" + dir, req.url))
            .then(content => {
                res.writeHead(200, {"Content-Type": "image/jpeg"})
                res.end(content)
            })
            .catch(err => {
                res.writeHead(500)
                res.end(err.toString())
            })
        }
        else {
            res.writeHead(404)
            res.end("No page found")
        }
}

const server = http.createServer(requestListener)
server.listen(port, host, () => { console.log("Server is running") })

