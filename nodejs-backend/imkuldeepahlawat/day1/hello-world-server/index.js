// http
const http = require('http')






const server =  http.createServer((req,res)=>{
    // request
    // response
    console.log('hello  from server')
    res.write(JSON.stringify({
        data:'Hello from server, im a happy server'
    }))
    res.end()
})


server.listen(3001,()=>{
    console.log('listen.... on',3001)
})