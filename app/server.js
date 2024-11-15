var express = require('express')
var app = express()
const port = 3000

app.get('/quotes', (req, res) => {
    console.log(req);
    res.send('HEWOOOO :3')
})

app.get('/', (req, res) => {
    res.send('welcoem to the uwu')
})


app.listen(port, () => {
    console.log('listening on port 3000')
})