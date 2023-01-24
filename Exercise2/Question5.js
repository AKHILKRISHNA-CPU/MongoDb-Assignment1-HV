// List all the student details whose marks and grades are updated on the same date.

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/Assignment1", (error, client) => {
  if (error) {
    return console.log("Unable to connect to the database.");
  }
  console.log("Connected successfully.");
  const db = client.db("Assignment1");
  db.collection("Data2").find({ $where: "this.Marks.updateDate === this.Grade.updateDate" }).toArray((error, result) => {
    if (error) {
      return console.log("Unable to fetch the data.");
    }
    result.forEach((data) => {
      console.log("Student Id: ", data.StudentId);
      console.log("Name: ", data.Name);
      console.log("Marks: ", data.Marks);
      console.log("Grade: ", data.Grade);
      console.log("date updated: ", data.Date);
    });
    client.close();
  });
});

