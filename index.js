const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'));

app.get('/checkout', (req, res) => {
    res.json(req.query)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
