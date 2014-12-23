var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hahaha, Pi is delicious!</h1>')
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Test app listening at http://%s:%s', host, port)

})
