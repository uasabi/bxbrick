var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var resolve = require('path').resolve;

nunjucks.configure([
  resolve(__dirname, './views/'),
  resolve(__dirname, './assets/icons/')
], {
  autoescape : true,
  watch: (process.env.NODE_ENV === 'production')
}).express(app);

app.use('/assets', express.static('assets'));

app.get('/', function (req, res) {
  res.render('landing.html');
});

app.listen(process.env.PORT || 3000);
