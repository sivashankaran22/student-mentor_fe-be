require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT ||9000;


// create model

const Note = require('./models/mongo');


// sett the endpoint Mentor Details

app.get('/',(req,res)=>{
  res.send('<h1>Batch Details</h1>');
})

// fetches all the resources

app.get('/api/mentordetails',(req,res) =>{
    Note.find({},{})
    .then((Mentor) => {
    res.json(Mentor);
    });
});

// Create a new resource

app.post('/api/mentordetails',(req,res) =>{
    const postMentor = new Note(req.body)
    postMentor.save()
        .then(result => {
            res.status(201).json({message:"metor Detail created sucessfully"});
        })
}
) 

// get single Mentordata

app.get('/api/mentordetails/:_id',(req,res) =>{
    const check =req.params._id;  
    Note.findById(check)
        .then((Batch) =>{
            if (!Batch) {
                return res.status(404).json({err:'note not'})
            }
            res.json(Batch)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({error:'internal server error'})
          })
})

// delete the single resource

app.delete('/api/mentordetails/:_id',(req,res) =>{
    const delMenId=req.params._id;

    Note.findByIdAndDelete(delMenId)
      .then((deletedetail) => {
        if (!deletedetail){
            return res.status(404).json({error:"Note not found"})
        }
        res.status(204).json({message:"metor Detail created sucessfully"});
      })
      .catch((err) => {
        res.status(500).json({error:'internal server error'})
      })
})

// update the single resource

app.put('/api/mentordetails/:_id',(req,res) =>{
    const updateMenId=req.params._id;
    const noteToPut = req.body

    Note.findByIdAndUpdate(updateMenId, noteToPut)
      .then((updatedetail) => {
        if (!updatedetail){
            return res.status(404).json({error:"Note not found"})
        }
        res.json(updatedetail);
      })
      .catch((err) => {
        res.status(500).json({error:'internal server error'})
      })
})


// create model

const Snote = require('./models/stu_mongo')

// sett the endpoint Student Details


// fetches all the resources

app.get('/api/studentdetails',(req,res) =>{
    Snote.find({},{})
    .then((Student) => {
    res.json(Student);
    });
});

// Create a new resource

app.post('/api/studentdetails',(req,res) =>{
    const postStudent = new Snote(req.body)
    postStudent.save()
        .then(result => {
            res.status(201).json({message:"metor Detail created sucessfully"});
        })
}
) 

// get single Studentdata

app.get('/api/studentdetails/:_id',(req,res) =>{
    const scheck =req.params._id;  
    Snote.findById(scheck)
        .then((scheck) =>{
            if (!scheck) {
                return res.status(404).json({err:'note not'})
            }
            res.json(scheck)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({error:'internal server error'})
          })
})

// delete the single resource

app.delete('/api/studentdetails/:_id',(req,res) =>{
    const delStuId=req.params._id;

    Snote.findByIdAndDelete(delStuId)
      .then((deletedetail) => {
        if (!deletedetail){
            return res.status(404).json({error:"Note not found"})
        }
        res.status(204).json({message:"metor Detail created sucessfully"});
      })
      .catch((err) => {
        res.status(500).json({error:'internal server error'})
      })
})

// update the single resource

app.put('/api/studentdetails/:_id',(req,res) =>{
    const updateStuId=req.params._id;
    const noteToPuts = req.body

    Snote.findByIdAndUpdate(updateStuId, noteToPuts)
      .then((updatedetail) => {
        if (!updatedetail){
            return res.status(404).json({error:"Note not found"})
        }
        res.json(updatedetail);
      })
      .catch((err) => {
        res.status(500).json({err:'internal server error'})
      })
})

app.listen(PORT);
console.log(`This port ${PORT} is working fine`)