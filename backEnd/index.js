const express = require('express');
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').objectId;
var cors = require('cors');
var client = new MongoClient('mongodb://localhost:27017/myPro', { useNewUrlParser: true });
const app = express();
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


//api making

app.get('/', (req, res) => {
    res.send({ status: "ok", data: "this is a test api" });
})

app.get('/user', (req, res) => {
    res.send({ status: "ok", data: [{ name: "xyz", age: 30 }] })
})

app.post('/sign-in', bodyParser.json(), (req, res) => {
    var collection = connection.db('myPro').collection('users');
    collection.find(req.body).toArray((err, doc) => {
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
})

//signup api
app.post('/sign-up', bodyParser.json(), (req, res) => {
    var collection = connection.db('myPro').collection('users');


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
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})