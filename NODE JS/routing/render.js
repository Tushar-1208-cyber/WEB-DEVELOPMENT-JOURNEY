let express = require ("express")

let app = express();


app.get("/", (req,res)=>{
    res.sendFile("home.html" , {root:_dirname})
})

app.get("/soet", (req,res)=>{
    res.sendFile("soet.html" , {root:_dirname})
})


app.get("/som", (req,res)=>{
    res.sendFile("som.html" , {root:_dirname})
})

app.get("/sol", (req,res)=>{
    res.sendFile("sol.html" , {root:_dirname})
})


app.listen ("3000" , ()=>{
    console.log("SERVER IS CONNCECTED.....")
})