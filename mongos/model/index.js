let express = require("express")
let app = express()
app.listen("3000", ()=>{
    console.log ("Server is connected")

})

let dbcon = require("/dbcon/dbconnect.js")
dbcon()