var express = require('express');

var app = express();

app.use('/', express.static('./'))

// app.use('*',function(req,res){
//   if(req.accepts('html')){
//     res.send("Page not found")
//   }
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
