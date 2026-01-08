const http = require("http")

let server = http.createServer((req,res)=>{
    if(req.url=="/")
    {
        req.write("<h1>BML Munjal University</h1>")
    }
    else if{

    }
    else
    {

    }

})

server.listen("3000" , ()=>{

    console.log("SERVER is Connected")
})