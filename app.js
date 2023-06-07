const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
const mainRouter = require('./router/mainRouter')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', mainRouter)


app.listen(PORT, () => {
  console.log('http://localhost:'+PORT);
});

//app.use((req, res)=>(
//  res.sendFile(path.join(__dirname,'./views/login.html'))
//))
