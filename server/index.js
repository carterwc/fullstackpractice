// express server - require express
// app = express()

// require bodyparser
// app.use it - *** bodyparser.json() takes an OPTIONAL OBJECT that can have a TYPE 'application/json' which will parse json coming through it

// require the DB functions from the DB folder

// establish port

// app.get

// app.post

// app.listen

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const {connection, getCows, createCow} = require('../database/index.js');
const path = require('path');
app.use(bodyParser.json({type: 'application/json'}));

var port = 3000;

// TODO - static express.static file send back html
app.use(express.static(path.join(__dirname, '../client/dist')))


app.get('/api/cows', (req, res) => {
  // call the DB function that does the query - pass the callback to it
  getCows( (error, results) => {
    if (error) {
      // tell us if bad request
      res.status(400).send('BAD Request From the Server GET')
    } else {
      // give us the rigt status code and send back the results as json so our bodyparser parses it too
      // res.status(200);
      res.json(results);
    }
  })
})


app.post('/api/cows', (req, res) => {
  // the req.body is the parameters we are passing from the front end
  createCow(req.body, (error, results) => {
    if (error) {
      res.status(400).send('Bad Request from POST on Server!')
    } else {
      res.status(201);
      res.json(results, 'Successful POST');
    }
  })
})


app.listen(port, (error) => {
  if (error) {
    console.log(error, 'NOT Connected to SERVER!');
  }
  console.log(`Listening to Port ${port}!`);
})
