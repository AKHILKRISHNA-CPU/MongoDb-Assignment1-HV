// // Find out the student details whose marks are divisible by 5.


const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/Assignment1", (error, client) => {
    if (error) {
        return console.log("Unable to connect to the database.");
    }
    console.log("Connected successfully.");
    const db = client.db("Assignment1");
    db.collection("Data2").find({ marks: { $mod: [5, 0] } }).toArray((error, documents) => {
        if (error) {
            return console.log("Unable to fetch the data.")
        }
        console.log(documents);
        client.close();
    });
});
