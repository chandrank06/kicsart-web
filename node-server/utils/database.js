const Sequelize = require("sequelize");
const sequelize = new Sequelize("kicsart", "root", "kich9190", {
  dialect: "mysql",
  host: "127.0.0.1"
});

module.exports = sequelize;
