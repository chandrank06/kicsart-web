const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send("Hi from app");
});
app.listen(3000);
