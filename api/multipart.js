var express = require('express')
var app = express()
var multer = require('multer')
var upload = multer()
var port = 3001

app.post('/profile', upload.none(), (req, res) => {
        const formData = req.body
        console.log('form Data', formData)
        res.status(200).send(formData)
})
app.get('/',(req, res) => res.status(200).send('all is good'))

app.listen(port, () => console.log(`Example app listening on ${port}`))