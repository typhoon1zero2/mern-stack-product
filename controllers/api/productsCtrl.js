const Products = require("../../models/Products");

/****************************
 * Filter Sorting Paginating
 ***************************/
 class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){}
    sorting(){}
    paginating(){}
}



/**********************************
 * CREATE- READ - UPDATE - DELETE
 *********************************/

const productCtrl = {
  getProducts: async (req, res) => {
    try {
      //res.json('test')
      const products = await Products.find();
      res.status(200).json(products);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  },
  createProducts: async (req, res) => {
    try {
      const {
        product_id,
        title,
        price,
        description,
        content,
        images,
        category,
      } = req.body;
      if (!images) return res.status(200).json({ msg: "No image upload" });

      const product = await Products.findOne({ product_id });
      if (product)
        return res.status(200).json({ msg: "This product already exists." });

      const newProduct = new Products({
        product_id,
        title: title.toLowerCase(),
        price,
        description,
        content,
        images,
        category,
      });
      await newProduct.save();
      res.status(200).json({ msg: "Created a product" });
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  },
  deletedProduct: async (req, res) => {
    try {
      await Products.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "Deleted a Product" });
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },
  updatedProduct: async (req, res) => {
    try {
      const { title, price, description, content, images, category } = req.body;
      if (!images) return res.status(400).json({ msg: "No image upload" });

      await Products.findOneAndUpdate(
        { _id: req.params.id },
        {
          title: title.toLowerCase(),
          price,
          description,
          content,
          images,
          category,
        }
      );

      res.status(200).json({ msg: "Updated a Product" });
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },
};

module.exports = productCtrl;
