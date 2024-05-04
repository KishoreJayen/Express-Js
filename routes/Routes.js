const express = require('express');

const router = express.Router();


router.get('/routes', (req, res, next) =>{
    res.send('<h1>The Route is Coming from the router file <h1/>')
})

module.exports = router;