

const Clothes=(sequelize,DataTypes)=>sequelize.define('clothes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER
    }
  }, {
  });


  module.exports=Clothes;