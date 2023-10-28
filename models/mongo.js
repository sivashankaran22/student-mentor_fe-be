const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;

mongoose.set('strictQuery',false);

//connect to the database

mongoose.connect(url)
  .then(result =>{
    console.log(('connected to database'));
  })
  .catch((error)=>{
    console.log(error.message);
  })

//  create a schema

const noteSchema = new mongoose.Schema({
  id: String,
  name:String,
  batch:String,
  gender:String
})

noteSchema.set('toJSON',{
  transform: (document, returnedObject) => {
      delete returnedObject.__v
  }
})
module.exports = mongoose.model('Note',noteSchema,'Mentor');