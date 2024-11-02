const http = require('http');
const HOSTNAME = 'localhost'
const PORT = 9000
const server = http.createServer((req,res)=>{
    if (req.url.startsWith('/tasks')){
        taskRoutes(req,res)
    }else{
        res.writeHead(404,'not found',{'content-type':'appliction/json'})
        res.end(JSON.stringify({
            message: 'sorry, you got lost!'

        }))
    }

});
server.listen(P,HOSTNAME,()=>{
    console.log(`server running on port ${PORT}`)

})