const Products = require("../../models/Products");


module.exports = {
    productCtrl
  };

/****************************
 * Filter Sorting Paginating
 ***************************/
 const productCtrl = {
     getProducts: async( req, res ) =>{
         try {

         }catch(e){
            res.status(400).json({ msg: e.message });
          }
     },
     createProducts: async( req, res ) => {
         try {

         }catch(e){
            res.status(400).json({ msg: e.message });
          }
     },
     deletedProducts: async( req, res ) => {
         try {

         }catch(e){
            res.status(400).json({ msg: e.message });
          }
     },
     updatedProducts: async( req, res ) => {
        try {

        }catch(e){
           res.status(400).json({ msg: e.message });
         }
    }
 }