const Products = require("../../models/Products");

/****************************
 * Filter Sorting Paginating
 ***************************/
const productCtrl = {
  getProducts: async (req, res) => {
    try {
      //res.json('test')
      const products = await Products.find();
      res.json(products);
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
      res.json({ msg: "Created a product" });
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  },
  deletedProducts: async (req, res) => {
    try {
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  },
  updatedProducts: async (req, res) => {
    try {
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  },
};

module.exports = productCtrl;
