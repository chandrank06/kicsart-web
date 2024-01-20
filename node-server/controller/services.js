const Service = require("../model/services");

exports.getFetchAllServices = async (req, res, next) => {
  const services = await Service.findAll();
  res.status(200).send({
    services: services
  });
};
exports.putAddServices = async (req, res, next) => {
  const createdService = await Service.create({
    title: "Title",
    description: "This is a description",
    imageUrl: "dummyUrl"
  });
  if (createdService.id) {
    res.status(200).send({ successMessage: "Service successfully added" });
  }
};
exports.postEditServices = (req, res, next) => {
  res.status(200).send({
    services: [{ title: "Title", description: "This is description" }]
  });
};
exports.deleteServices = (req, res, next) => {
  res.status(200).send({
    services: [{ title: "Title", description: "This is description" }]
  });
};
