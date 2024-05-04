const express = require('express')

const router = express.Router();

router.get('/main',(req, res, next) =>{
    res.send('<h1>Main Method<h1/> <br> <form-action ="/main" method="POST"> <input type="text"/> <input type="submit"/> <form/>')
    
})

router.get('/post', (req, res, next) =>{
    res.send('<h1>Iam Coming From the Post Method<h1/>')
})

module.exports = router;