import express from 'express'
const app = express()
let reqCount = 0;

const reqInc = (req, res, next) => {
 reqCount++
 next()
}

app.get("/", reqInc, (req, res) => {
    res.send(`total numbers of request that hit the /1 , /2 and /3 endpoints are : ${reqCount}`)
})

app.get("/1", reqInc, (req, res) => {
    res.send(`hi im first end point`)
})
app.get("/2", reqInc, (req, res) => {
    res.send(`hi im second end point`)
})
app.get("/3", reqInc, (req, res) => {
    res.send(`hi im third end point`)
})
app.listen(3000)