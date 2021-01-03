module.exports = function (sequelize, DataTypes) {
  const Tool = sequelize.define(
    "Tool",
    //info pulled from db
    {
      name: DataTypes.STRING,
    },
    { timestamps: false }
  );
//user tools pulled from db
  Tool.associate = function (models) {
    Tool.belongsToMany(models.Profile, {
      through: "UserTools",
      foreignKey: "toolId",
    });
  };

  return Tool;
};
