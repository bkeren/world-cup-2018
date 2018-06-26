const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const routes = app => {
  app.route('/')
     .get( (req , res) => {
       fetch('https://s3-us-west-2.amazonaws.com/fifaworldcup2018rest/wc18.json')
       .then((response => response.json()))
       .then(json => res.json(json))
       .catch((ex) => console.log('parsing failed' , ex))
     });
}

routes(app);
app.listen(port);
console.log("WORLD CUP 2018 is starting...");
