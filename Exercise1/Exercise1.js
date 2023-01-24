const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/Students",(error,client)=>{
if (error){
    return console.log("unable to connect")
}
console.log("Connected Sucessfully");

const db = client.db ("Assignment");
db.collection ("Data").insertMany([
    {
        Id:101,
        Email:"a@a.com",
        Name : "Alex",
        Department:"CSE",
        submission:1,
        Grade:"N.A"
    },
    {
        Id:203,
        Email:"b@a.com",
        Name : "John",
        Department:"CIVIL",
        submission:0,
        Grade:"N.A"
    },
    {
        Id:305,
        Email:"c@c.com",
        Name : "Sam",
        Department:"CSE",
        submission:0,
        Grade:"N.A"
    },
    {
        Id:719,
        Email:"d@d.com",
        Name : "Rob",
        Department:"ELECTRONICS",
        submission:1,
        Grade:"N.A"
    }
],(error,result)=>{
    if (error){
        return console.log("unable to insert",error);
    }
    console.log(JSON.stringify(result.ops));
});
client.close();
});