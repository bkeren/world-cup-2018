const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname , 'client/build')));
app.use(express.static(path.join(__dirname , 'public')));

const routes = app => {
  app.route('/wc18')
     .get( (req , res) => {
       fetch('https://s3-us-west-2.amazonaws.com/fifaworldcup2018rest/wc18.json')
        .then((response => response.json()))
        .then(json => res.json(json))
        .catch((ex) => console.log('parsing failed' , ex))
     });

  app.route('/').get((req , res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

routes(app);
app.listen(port);
console.log("WORLD CUP 2018 is starting...");
