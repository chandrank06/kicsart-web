const Sequelize = require("sequelize");
const sequelize = new Sequelize("kicsart", "root", "kich9190", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
