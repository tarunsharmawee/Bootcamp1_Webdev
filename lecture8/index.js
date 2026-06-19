// http server that support 4 routes (/sum /sub /div /mul)
import express from 'express';
const app = express()
const port = 3000

app.use(express.json())
let reqCount = 0

app.get('/mul', (req, res) => {
    reqCount++
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const c = a * b
    res.json({
        ans: `<b>the result of multiplying ${a} to ${b} is = ${c}</b>`
    })
})
app.get("/status", (req, res) => {
    reqCount++
    res.send("up")
})

app.get("/reqCount", (req, res) => {
    reqCount++
    res.send({
        reqCount,
    })
})

app.listen(port)