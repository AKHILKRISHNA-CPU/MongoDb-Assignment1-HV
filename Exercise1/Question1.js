// Find the records of all the students who have submitted their assignments.

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/Students",(error,client)=>{
if (error){
    return console.log("unable to connect")
}
console.log("Connected Sucessfully");
const db = client.db ("Assignment");
db.collection ("Data").find({"submission":1}).toArray().then((docs)=>{
    console.log("The details found");
    console.log(JSON.stringify(docs,undefined,2));
},(error)=>{
    console.log("Error occured unable to fetch",error)
});
client.close();
});