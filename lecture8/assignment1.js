import express from 'express';
const app = express()
const port = 3000

const dataCollect = (req, res, next) => {

    const url = req.url
    const method = req.method
    const time = new Date().toLocaleTimeString();

    console.log(`the url, method and time of last request are ${url}, ${method} & ${time}`)
    next()

}
app.get("/", dataCollect, (req, res) => {
    res.send(`this is the home page fellas`)
})

app.get("/data", dataCollect, (req, res) => {

})
app.listen(port)