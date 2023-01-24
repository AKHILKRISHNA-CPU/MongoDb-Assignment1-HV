// Update the department of Sam as “MECHANICAL”.

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/Students",(error,client)=>{
if (error){
    return console.log("unable to connect")
}
console.log("Connected Sucessfully");

const db = client.db ("Assignment");
db.collection("Data").findOneAndUpdate({
    Name:"Sam"
},{
    $set:{
        Department:"MECHANICAL"
    }
},{
    returnOriginal:false
}).then ((result)=>{
    console.log(result);
});
client.close()
});