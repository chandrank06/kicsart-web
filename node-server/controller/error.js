exports.getResourceNotFound = (req, res, next) => {
  res.status(404).send("No resource found.");
};
