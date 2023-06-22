const path = require('path')
const express = require('express')
const mainRoutes = require('./routes/mainRoutes')
const noteRoutes = require ('./routes/noteRoutes')


const PORT = process.env.PORT || 3000
const app = express() 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', mainRoutes)
app.use("/notes",noteRoutes)

app.listen(PORT, () => {
  console.log('http://localhost:'+PORT);
});

//app.use((req, res)=>(
//  res.sendFile(path.join(__dirname,'./views/login.html'))
//))
