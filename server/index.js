const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("This is Sweet Tangent's backend server.")
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(function(req, res, next) {
    //res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  
// /api/user/one/:id/:type (type == tangents, instances, comments, ...)
// /api/user/all/orderby/:orderType/:pgsz/:last
// /api/tangent/one/:id/:type (type == intances, likes, ...)
// /api/tangent/all/:orderby/:orderType/:pgsz/:last
// /api/instance/one/:id/:type (type = frames, ...)

// TODO: authorization: validate credentials in header

app.use('/api/user', require('./src/api/user'))
app.use('/api/frame', require('./src/api/frame'))

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})

