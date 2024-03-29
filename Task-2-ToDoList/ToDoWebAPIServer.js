const express = require('express');
const app = express();
const path = require('path');
const mongodb = require('mongodb');
const db = require('./data/database.js');
const routes = require('./routes/routes.js');
const { json } = require('express/lib/response');

app.set('view engine','ejs');
app.set('views',path.join('./views'));

app.use(express.static('/home/sharmaketan14/Desktop/Codes/WebDevelopmentUdemy/BackEnd/ToDoWebAPI/static'));
app.use(express.urlencoded({extended : false}));

app.use(express.json());

app.use('/',routes);


app.use(function (req, res, error, next){
  app.status(500);
});

db.connectToDatabase().then(function (){
  app.listen(3000);
});