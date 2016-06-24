var mongoose = require('mongoose');  // require mongoose for mongo db

var ourSchema = new mongoose.Schema({  // set up new mongoose schema
  assignment_number: String,
  student_name: String,
  score: Number,
  date: Date
});

var assncollection = mongoose.model( 'assncollection', ourSchema );  // sets schema to model var

module.exports=assncollection;
