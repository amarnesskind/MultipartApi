var express = require('express')
var app = express()
var multer = require('multer')
var upload = multer()
var fs = require('fs');
var port = 3001

app.post('/profile', upload.none(), (req, res) => {
        const formData = req.body
        console.log('form Data', formData)
        const reqObj = {
            "payload" : formData,
            "headers" : req.headers
        }
        fs.writeFile('./../file/formdata.txt', JSON.stringify(reqObj),(err) => {
           if(err){
               res.status(500).send('something went wrong')
           } else {
            fs.readFile('./../file/formdata.txt',(err,data) => {
                if(err){
                 res.status(500).send('something went wrong') 
                } else {
                 res.status(200).send(JSON.parse(data))
                }
            })
           }
        })      
        console.log('form Data', req.headers)
})
app.get('/',(req, res) => res.status(200).send('all is good'))

app.listen(port, () => console.log(`Example app listening on ${port}`))