const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.static('public'));

//app.use((req, res)=>(
//  res.sendFile(path.join(__dirname,'./views/login.html'))
//))

const mainRouter = require('./router/mainRouter')
app.use('/', mainRouter)

app.listen(PORT, () => {
  console.log('http://localhost:'+PORT);
});