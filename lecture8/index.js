// http server that support 4 routes (/sum /sub /div /mul)
import express from 'express';
const app = express()
const port = 3000

let reqCount = 0
function middleware(req, res, next){
    reqCount++
    next()
}

app.get("/reqCount", (req, res) => {
    res.send({
        reqCount,
    })
})

app.use(express.json())
app.get('/mul', middleware, (req, res) => {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const c = a * b
    res.json({
        ans: `<b>the result of multiplying ${a} to ${b} is = ${c}</b>`
    })
})
app.get("/status", middleware, (req, res) => {
    res.send("up")
})


app.listen(port)