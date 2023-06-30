const path = require('path')
const express = require('express')
const app = express() 

const PORT = process.env.PORT || 3009

const mainRoutes = require('./routes/mainRoutes')
const noteRoutes = require ('./routes/noteRoutes')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use("/", mainRoutes)
app.use("/note",noteRoutes)

app.listen(PORT, () => {
  console.log('http://localhost:'+PORT);
});

//app.use((req, res)=>(
//  res.sendFile(path.join(__dirname,'./views/login.html'))
//))
