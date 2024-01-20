const express = require("express");
const servicesController = require("./controller/services");
const errorController = require("./controller/error");
const sequelize = require("./utils/database");
const app = express();

sequelize
  .sync()
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {});
app.use(function(req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "*");

  next();
});
app.get("/services", servicesController.getFetchAllServices);
app.put("/add-services", servicesController.putAddServices);
app.post("/edit-services", servicesController.postEditServices);
app.delete("/delete-services", servicesController.deleteServices);
app.options("*", function(req, res) {
  res.sendStatus(200);
});

app.use(errorController.getResourceNotFound);
