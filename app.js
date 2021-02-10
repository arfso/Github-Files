const http = require('http');
const fs = require('fs');
const { isAbsolute } = require('path');

const server = http.createServer((req, res) =>
{
  console.log(req.url);
  
  res.setHeader('Content-Type', 'text/html');
  let urll = './site/';
 
   if(req.url == '/')
   {
     urll += 'website.html';
   }
   else if(req.url == 'About Us')
   {
     urll += 'about.html';
   }
   else if(req.url == 'Contact Us')
   {
     urll += 'contactus.html';
   }
   else
   {
     urll += '404.html'
   }
   
  fs.readFile(urll, (err, data) =>
   {
     if (err)
     {
       console.log(err);
       res.end();
     }
     else 
     {
       res.end(data);
     }
    });
  });
server.listen(3000, 'localhost', () => 
{
  console.log('listening')
});