var express = require('express');
var app     = express();
var PORT    = process.env.PORT || 3000;

app.use(express.static('public'));

// ROUTES
app.get('/', function (req, res) {
  res.send(__dirname + '/index.html')
})

app.listen(PORT, function() {
  console.log('listening on PORT: ' + PORT);
});
