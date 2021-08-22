const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();
// importing routes
const customerRoutes = require('./routes/customer');
// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'bsml4n9jtnqd3rilzvhs-mysql.services.clever-cloud.com',
  user: 'u32gkejk4xxilzbq',
  password: 'wAqtKMlmoSHKaUTXV8ie',
  port: 3306,
  database: 'bsml4n9jtnqd3rilzvhs'
}, 'single'));
app.use(express.urlencoded({extended: false}));
// routes
app.use('/', customerRoutes);
// static files
app.use(express.static(path.join(__dirname, 'public')));
// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});