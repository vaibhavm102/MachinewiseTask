const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(bodyParser.json()); // client req data convert from json js object
app.use(cors()); // cross origin security implemented

const port = 4000;
const host = "127.0.0.1";



app.get("/", (req, res) => {
  res.send("Server root link...");
});

app.post("/register", (req, res) => {
  const data = req.body;
  console.log(data);

  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb",
  });

  
});




app.listen(port, host, () => {
  console.log(`node server started on http://${host}:${port}`);
});

// http://127.0.0.1:4000/register