const { Sequelize, DataTypes, Model } = require("sequelize");
const path = require("path");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
});
class User extends Model {}
User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "User" }
);
class Entries extends Model {}
Entries.init(
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  { sequelize, modelName: "Entries" }
);
User.hasMany(Entries, {
  as: "entries",
  foreignKey: "UserId",
  onDelete: "cascade",
});
Entries.belongsTo(User, { foreignKey: "UserId" });
sequelize.sync();
module.exports = { sequelize, User, Entries };
