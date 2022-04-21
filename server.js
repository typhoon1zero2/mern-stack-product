require('dotenv').config();
require('./config/database');
const express = require('express');
const path = require('path');
const cors = require('cors')
const favicon = require('serve-favicon');
const logger = require('morgan');


const app = express();
app.use(logger('dev'));
app.use(cors())
app.use(express.json());

//test router in POSTMAN
app.use('/user', require('./routes/api/usersRoute'));
app.use('/api', require('./routes/api/categoriesRoute'))

 /*************************************************************
  *     Configure both serve-favicon & static middleware
  *     To serve from the production 'build' folder
  **************************************************************/
 app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
 app.use(express.static(path.join(__dirname, 'build')));

  /*************************************************************
  *     Check if token and create req.user
  **************************************************************/
 app.use(require('./config/checkToken'));

 /*************************************************************
  *     Put API routes here, before the "catch all" route
  **************************************************************/
//app.use('/api/usersRoute', require('./routes/api/usersRoute'));
//  app.use('/api/categoriesRoute', require('./routes/api/categoriesRoute'))
 //app.use('/api/productsRoute', require('./routes/api/productsRoute'))
//  app.use('/api/paymentsRoute', require('./routes/api/paymentsRoute'))

 /*************************************************************
  *   The following "catch all" route (note the *) is necessary
  *     to return the index.html on all non-AJAX requests
  **************************************************************/

 app.get('/*', function (req, res) {
     res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
  /*************************************************************
  *   Configure to use port 3001 instead of 3000 during
  *   development to avoid collision with React's dev server
  **************************************************************/
  const PORT = process.env.PORT || 3001
  app.listen(PORT, function(){
      console.log(`Express app running on port ${PORT}`)
  });
 


