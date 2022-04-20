/********************************
 *  IMPORT DEPENDENCIES
 ********************************/
 const mongoose = require("mongoose");
 const { Schema, model } = mongoose;
 
 /********************************
  * PRODUCTS SCHEMA
  *******************************/
 const productSchema = new Schema({
        product_id:{
            type: String,
            unique: true,
            trim: true,
            required: true
        }
 });
 /******************************
  * MAKE PRODUCTS MODEL
  ******************************/
 const Product = model("Product", productSchema);
 
 /*****************************
  * EXPORT MODEL
  ****************************/
 module.exports = Product;
 
 /***************************
  * PRODUCTS IN THE MONGODB
  **************************/
