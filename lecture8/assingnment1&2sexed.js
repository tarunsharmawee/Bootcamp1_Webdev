import express from 'express'
const app = express()
let reqCount = 0
let postMeth = 0
let getMeth = 0
let pizza = 0
let burger = 0


const dataCollect = (req, res, next) => {
    reqCount++ 
    if (req.method == "POST") {
        postMeth++
    }
    else {
        getMeth++
    }
    if (req.url == "/pizza") {
        pizza++
    }
    else if (req.url == "/burger") {
        burger++
    }
    next()
}

app.get("/", (req, res) => {
    res.send(`hey we are a chinese company who collect you data secretly, and here it is : 
              POST method hit : ${postMeth} | Get Method hit : ${getMeth} | burger king hit :
              ${burger} | pizza hut hit : ${pizza} | and all total requests hit ${reqCount}`)
})

app.get("/pizza", dataCollect, (req, res) => {
    res.send(`this is pizza hut how may i help you, i see you have been through us ${pizza} times before`)
})
app.get("/burger", dataCollect, (req, res) => {
    res.send(`this is burger king how may i help you, i see you have been through us ${burger} times before`)
})
app.post("/kfc", dataCollect, (req, res) => {
    res.send(`this is KFC how may i help you, oh no we are not creeps, 
              we don't count how many times you have been through us, we are here just to register the post method request`)
})

app.listen(3000)