// Insert a document with id as 812, name as “Rick”, email as  e@e.com, submission as 1, and grade as N.A.
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/Students",(error,client)=>{
if (error){
    return console.log("unable to connect")
}
console.log("Connected Sucessfully");

const db = client.db ("Assignment");
db.collection ("Data").insertOne({
    Id:812,
    Email:"e@e.com",
    Name : "Rick",
    submission:1,
    Grade:"N.A"
},(error,result)=>{
    if (error){
        return console.log("unable to insert",error);
    }
    console.log(JSON.stringify(result.ops));
});
client.close();
});