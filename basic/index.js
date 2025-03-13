console.log("Andrul")

const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


//root route
app.get('/', (req, res) => {
    //in console
    // res.send("Hello Andrul")
    //in browser
    res.send("<h1>Hello Andrul Gaming</h1>")
})

//about route
app.get('/about', (req, res) => {
    res.send("<h1>About Page</h1>")
})

//gallary route
app.get('/gallary', (req, res) => {
    res.send("<h1>Gallary Page</h1>")
})

//services route
app.get('/services', (req, res) => {
    res.send("<h1>Services Page</h1>")
})

//Users route
app.get('/users/:id', (req, res) => {
    res.send(req.params)
})

app.get('/users/:userid/level/:levelid', (req, res) => {
    res.send(req.params)
})
app.get('/users/:userid/level/:levelid', (req, res) => {
    res.send(req.params.userid)
})

//using query parameters
//http://localhost:3000/search?name=andrul&age=20

//in console
// app.get('/search', (req, res) => {
//     res.send(req.query)
// })

//in browser
app.get('/search', (req, res) => {
    const name = req.query.name
    const age = req.query.age
    res.send(`Name: ${name}, Age: ${age}`)
})
