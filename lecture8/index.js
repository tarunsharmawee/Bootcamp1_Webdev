// http server that support 4 routes (/sum /sub /div /mul)
import express from 'express'; 
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile("/home/tarun/bootcamp1/webdev/lecture8/index.html")
})

app.get('/sum/:a/:b', (req, res) => {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    const c = a + b
    res.json({
        ans : `<b>the result of adding ${a} and ${b} is = ${c}</b>`
    })
})
app.get('/sub', (req, res) => {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const c = a - b
 
    res.send(`<b>  the result of subtracting ${b} from ${a} is = ${c}</b>`)
})
app.post('/div', (req, res) => {
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)
    const c = a / b
    res.json({
        ans : `<b>the result of dividing ${a} by ${b} is = ${c}</b>`
    })
})
app.get('/mul', (req, res) => {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const c = a * b
    res.send(`<b>the result of multiplying ${a} to ${b} is = ${c}</b>`)
})

app.listen(port)