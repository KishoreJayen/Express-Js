const express = require('express')
const PORT = 3200;
const bodyParser = require('body-parser')
const ApiRoutes =require('./routes/ApiRoutes')
const Routes = require('./routes/Routes');

const app = express();
app.use(bodyParser.urlencoded())

app.use(ApiRoutes);
app.use(Routes);

app.use((req, res, next) =>{
   res.status(404).send('<h1>Error Page!!!! <h1/>')
})

// app.use('/second',(req, res, next) =>{
//     res.send("<h1>Heyy Hari <h1/>")
//     next()
// })

// app.use('/third',(req, res, next) =>{
//     res.send("<h1>Heyy Jayen <h1/>")
//     next();
// })

// app.use('/',(req, res, next) =>{
//     res.send("<h1>Heyy Krishh <h1/>")
   
// })



app.listen(PORT, () =>{
    console.log(`Server is Running on the ${PORT}`)
})

