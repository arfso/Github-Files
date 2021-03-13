const express = require('express')
const app = express()
const morgan = require('morgan')

app.set('view engine', 'ejs')
app.listen(3000)

app.use((req, res, next) => {
  console.log("Request Made");
  console.log(`Host:  ${req.hostname}`);
  console.log(`Path: ${req.path}`);
  console.log(`Method: ${req.method}`);
  next();
});

app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.sendFile('./views/index.ejs', {root:__dirname});
});

app.get('/other', function (req, res) {
  res.sendFile('./views/other.ejs', {root:__dirname});
});
 
app.use((req,res)=>{
  res.status(404).sendFile('.views/404.html', {root:__dirname});
});

