const express=require('express')
const app=express()
const PORT=5000

//Run the server using command node app.js
//Access the server by visiting this through your browser http://localhost:5000/

app.get('/',(req,res)=>{
    res.send("Hello world !")
})

app.listen(PORT,()=>{
    console.log("Server is running on",PORT)
})