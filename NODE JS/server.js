const http = require("http")
let server = http.createServer((req,res)=>{

    res.write("<h1>Helllllllllllllllllo</h1>");
});


// server.listen("3000" ,"127.0.0.1" ,()=>{

//     console.log("Server is connected")
// })

server.listen("3000" ,"127.0.0.1" , ()=>{
    
})