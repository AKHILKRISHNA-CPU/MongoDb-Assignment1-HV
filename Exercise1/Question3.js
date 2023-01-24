// Assign grade A to those students who have submitted their assignments.

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/Students",(error,client)=>{
if (error){
    return console.log("unable to connect")
}
console.log("Connected Sucessfully");

const db = client.db ("Assignment");
db.collection("Data").updateMany({
    submission:1
},{
    $set:{
        Grade:"A"
    }
},{
    returnOriginal:false
}).then ((result)=>{
    console.log(result);
});
client.close()
});