
require("dotenv").config();

const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twiter", (req, res) => {
    res.send("this is twiter")
})

app.get("/login", (req, res) => {
res.send(`<h1>Please login at website</h1>`)
})

app.get("/youtube", (req, res) => {
    res.send("<h2?>this is a Youtube clone webpage</h2?")
})

app.listen(8080, () => {
  console.log(`Example app listening on port ${port}`);
});
