const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');
const express = require('express');
const serveStatic = require('serve-static');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static(path.join(__dirname , 'client/build')));
app.use(express.static(path.join(__dirname , 'knockout/dist')));

app.get('/wc18' , (req,res) => {
  fetch('https://s3-us-west-2.amazonaws.com/fifaworldcup2018rest/wc18.json')
   .then((response => response.json()))
   .then(json => res.json(json))
   .catch((ex) => console.log('parsing failed' , ex))
});

app.get('/group' , (req,res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/knockout' , (req , res) => {
  res.sendFile(path.join(__dirname + '/knockout/dist/index.html'));
})

app.get('*' , (req , res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port);
console.log("WORLD CUP 2018 is starting...");
