const express=require('express');
const bodyParser = require('body-parser');
var MongoClient=require('mongodb').MongoClient;
var objectId=require('mongodb').objectId;
var cors=require('cors');
var dbname="mydatabase"
var client=new MongoClient('mongodb+srv://jeet2027:jeet@2027@cluster0-v2qwj.mongodb.net/mydatabase?retryWrites=true&w=majority',{useNewUrlParser:true});
const app= express();
app.use(cors());

var connection;
client.connect((err,con)=>{
    if(!err)
    {
        connection=con;
        console.log("Database Connected Successfully");
    }
    else{
        console.log("Databae Could Not Connect Successfully");
    }
})

//app start

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})

// //api making

// app.get('/',(req,res)=>{
//     res.send({status:"ok",data:"this is a test api"});
// })

// app.get('/user',(req,res)=>{
//     res.send({status: "ok",data:[{name:"xyz",age:30}]})
// })

//sign in api

app.post('/sign-in',bodyParser.json(),(req,res)=>{
    var collection=connection.db('mydatabase').collection('student');
    collection.find(req.body).toArray((err,doc)=>{
        if(!err && docs.length>0)
        {
            res.send({status:"ok",data:docs});
        }
        else
        {
            res.send({status:"failed",data:err});
        }
    })
})

//signup api
app.post('/sign-up',bodyParser.json(),(req,res)=>{
    var collection=connection.db('mydatabase').collection('student');


    collection.find({email:req.body.email}).toArray((err,doc)=>{
        if(!err && docs.length>0)
        {
            res.send({status:"failed",data:"email already exist"});
        }
        else
        {
            collection.insert(req.body,(err,result)=>{
                if(!err)
                {
                    result.send({status:"ok",data:"sign up success"});
                }
                else
                {
                    result.send({status:"failed",data:err});
                }
            })
        }
    })

})