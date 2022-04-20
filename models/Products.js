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
        },
        title:{
            type: String,
            trim: true,
            required: true
        },
        price:{
            type: Number,
            trim: true,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        content:{
            type: String,
            required: true
        },
        images:{
            type: Object,
            required: true
        },
        category:{
            type: String,
            required: true
        },
        checked: {
            type: Boolean,
            required: false
        },
        sold:{
            type: Numnber,
            default: 0
        }
 },     {
     timestamps: true
 }
 );
 /******************************
  * MAKE PRODUCTS MODEL
  ******************************/
 const Product = model("Products", productSchema);
 
 /*****************************
  * EXPORT MODEL
  ****************************/
 module.exports = Product;
 
 /***************************
  * PRODUCTS IN THE MONGODB
  **************************/
