var express = require('express');  // require express
var app=express();

var path = require('path');  // sets up basic path

var bodyParser = require('body-parser');  // require bodyparser for POST calls

var assncollection=require('../models/assignments.js');  // requiring the assignments model
var mongoose = require('mongoose');  // require mongoose for mongo db

app.use( bodyParser.json() );

mongoose.connect('localhost:/27017/assignmentdb');
app.get( '/', function( req, res ){    // set basic url
  res.sendFile( path.resolve( 'views/index.html' ) );
});

app.get( '/getAssignments', function( req, res ){  // GET function to retrieve data
  assncollection.find() // This is where the magic happens - all new and existing are found here
  .then( function( data ){  // similar to ajax get call - if found, then run function with data as parameter
    console.log("data from app" + data);
    res.send( data );  // returns records as "data"
  });
});

app.listen( 8080, 'localhost', function( req, res ){ // spins up server
  console.log( 'listening on 8080' );
});

app.post( '/testPost', function( req, res ){  // POST call
  var recordToAdd={  // adds record from input
    assignment_number: req.body.assignment_number,
    student_name: req.body.student_name,
    score: req.body.score,
    date: req.body.date
  };
  var newRecord=assncollection( recordToAdd );  // saves record to database
  newRecord.save();
});

app.use( express.static( 'public' ) );
