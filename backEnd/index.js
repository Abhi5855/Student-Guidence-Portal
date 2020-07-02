const express = require('express');
const bodyParser = require('body-parser');
var MongoClient=require('mongodb').MongoClient;
var objectId=require('mongodb').objectId;
var cors=require('cors');
var dbname="mydatabase"
var client=new MongoClient('mongodb+srv://jeet2027:jeet@2027@cluster0-v2qwj.mongodb.net/mydatabase?retryWrites=true&w=majority',{useNewUrlParser:true});
const app= express();
app.use(cors());
var connection;
client.connect((err, con) => {
    if (!err) {
        connection = con;
        console.log("Database Connected Successfully");
    }
    else {
        console.log("Databae Could Not Connect Successfully");
    }
})
//app start
// //api making
app.get('/', (req, res) => {
    res.send({ status: "ok", data: "this is a test api" });
})
app.get('/user', (req, res) => {
    res.send({ status: "ok", data: [{ name: "xyz", age: 30 }] })
})
//sign in api
app.post('/sign-in',bodyParser.json(),(req,res)=>{
    console.log(req.body);
    var collection=connection.db('mydatabase').collection('student');
    collection.find(req.body).toArray((err,docs)=>{
        console.log("docs found");
        console.log(docs);
        if(!err && docs.length>0)
        {
            res.send({status:"ok",data:docs});
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
})
//signup api
app.post('/sign-up',bodyParser.json(),(req,res)=>{

    console.log(req.body);


    var collection=connection.db('mydatabase').collection('student');
  collection.find({ email: req.body.email }).toArray((err, docs) => {
        if (!err && docs.length > 0) {
            res.send({ status: "failed", data: "email already exist" });
        }
        else {
            collection.insert(req.body, (err, result) => {
                if (!err) {
                    res.send({ status: "ok", data: "sign up success" });
                }
                else {
                    res.send({ status: "failed", data: err });
                }
            })
        }
    })
})

//contact api
app.post('/contact',bodyParser.json(),(req,res)=>{
    console.log("hii");
    console.log(req.body);
    var collection=connection.db('mydatabase').collection('contact');
    collection.insert(req.body,(err) => {
                if (!err) {
                    res.send({ status: "ok", data: "Query received" });
                }
                else {
                    res.send({ status: "failed", data: err });
                }
            })
        })

//table api

app.post('/table',bodyParser.json(),(req,res)=>{
    console.log(req.body);
    var collection=connection.db('mydatabase').collection('timetable');
    collection.insert(req.body,(err,result)=>{
        if(!err)
        {
            res.send({status:"ok",data:"TimeTable stored"});
        }
        else
        {
            res.send({status:"failed",data:err});
        }
    })
})
app.post('/gettable',bodyParser.json(), (req,res)=>{
    var collection=connection.db('mydatabase').collection('timetable');
    collection.find({email:req.body.email}).toArray((err,docs)=>{
        if(!err && docs.length>0)
        {
            res.send({status:"ok", data:docs[0]});
        }
        else{
            res.send({status:"failed", data:err});
        }

    })
})


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})