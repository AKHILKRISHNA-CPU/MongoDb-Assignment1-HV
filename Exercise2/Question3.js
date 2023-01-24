// List all the student details whose name starts with the “J” letter.


const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/Assignment1", (error, client) => {
    if (error) {
        return console.log("Unable to connect to the database.");
    }
    console.log("Connected successfully.");
    const db = client.db("Assignment1");
    db.collection("Data2").find({ Name: { $regex: /^J/ } }).toArray((error, result) => {
        if (error) {
            return console.log("Unable to fetch the data.")
        }
        result.forEach((data) => {
            console.log("Name: ", data.Name);
        });
        client.close();
    });
});
