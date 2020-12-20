module.exports = function (sequelize, DataTypes) {
  const Tool = sequelize.define(
    "Tool",
    {
      name: DataTypes.STRING,
    },
    { timestamps: false }
  );

  Tool.associate = function (models) {
    Tool.belongsToMany(models.Profile, {
      through: "UserTools",
      foreignKey: "toolId",
    });
  };

  return Tool;
};
