const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const resolve = require('path').resolve;

nunjucks.configure([
  resolve(__dirname, './views/'),
  resolve(__dirname, './assets/icons/')
], {
  autoescape : true,
  watch: (process.env.NODE_ENV === 'production')
}).express(app);

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => res.render('landing.html'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Ready: http://localhost:${process.env.PORT || 3000}`);
});
