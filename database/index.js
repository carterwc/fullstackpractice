// in this file need to require mysql
// set up connection object with credentials

// conection.connect

// can add get and post requests on DB

const mysql = require('mysql');
// requires mysq for use in this file

// creates the connection object with the properties and values we need to establish the connection to the DB
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cowDB'
});

// actually runs the connect function
  // takes a callback if Error let us know else say "connected"
connection.connect( function(error) {
  if (error) {
    console.error(error, 'error connecting to DB')
  } else {
    console.log('Connected to cowDB!!');
  }
});


// get function
  // takes a callback for async functionality
  // when triggered will select all cows from our database cowDB and return results to server / client
var getCows = function(callback) {
  connection.query('SELECT * from cows', (error, results) => {
    if (error) {
      console.log(error, 'error on database GET');
    } else {
      console.log(results, 'results is what from GET Query?')
      callback(null, results);
    }
  });
};

// port function
  // takes params - what we are being sent to create the cow and
  // a callback function for the asyc functionality
var createCow = function(params, callback) {
  connection.query('INSERT into cows(cowName, description) values(?, ?)', [params.cowName, params.description], (error) => {
    if (error) {
      console.log(error, 'error POSTing to our DB');
    } else {
      console.log(params, 'is this the cow name and descr?')
    }
  });
};



module.exports = {
  connection,
  getCows,
  createCow
}



