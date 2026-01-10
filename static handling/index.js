const express = require("express")
const path = require("path")
let app = express()

app.use

app.get("/" , (req,res)=>{

    res.sendFile();

})

app.get("/bml" , (req,res)=>{

    res.sendFile("bml.html" , {root:__dirname});

})

app.get("/soet" , (req,res)=>{

    res.sendFile("soet.html" , {root:__dirname});

})

app.get("/sol" , (req,res)=>{

    res.sendFile("solt.html" , {root:__dirname});

})

app.get("/som" , (req,res)=>{

    res.sendFile("som.html" , {root:__dirname});

})

app.listen("3000" , ()=>{

    console.log("Connected!!!")
    console.log(__dirname)
    console.log(path.join(__dirname,"./public"))
})