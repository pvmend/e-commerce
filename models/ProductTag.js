const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./Product');
const Tag = require("./Tag");
class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    product_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references : {
        model: 'product',
        key: "id",
      }
    },
    tag_id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: 'tag',
        key : "id",
      }
      
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;