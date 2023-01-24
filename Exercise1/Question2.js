// Assign grade C to those students who have not submitted their assignments.

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/Students",(error,client)=>{
if (error){
    return console.log("unable to connect")
}
console.log("Connected Sucessfully");

const db = client.db ("Assignment");
db.collection("Data").updateMany({
    submission:0
},{
    $set:{
        Grade:"C"
    }
},{
    returnOriginal:false
}).then ((result)=>{
    console.log(result);
});
client.close()
});