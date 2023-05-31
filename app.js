const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.static('public'));

const mainRouters = require('./routes/mainRoutes')
//app.get('/', function (req, res) {
//  res.sendFile(path.join(__dirname, 'views/index.html'))
//})

app.use('/', mainRouters)

app.listen(PORT, () => {
  console.log('http://localhost:'+PORT);
});