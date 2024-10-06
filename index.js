import express from "express";



import dotenv from "dotenv"
dotenv.config()
const app = express()

const port = process.env.port || 4000

app.get("/", (req, res) => {
    res.send("Hello from node")
})



app.listen(port, () => {
    console.log("server runngin on port:", port)
})
