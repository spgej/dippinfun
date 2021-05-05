// jshint esversion:7
const express = require("express");
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res)=> {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, (req, res)=> {
  console.log("Server initialized on port 3000.");
});
