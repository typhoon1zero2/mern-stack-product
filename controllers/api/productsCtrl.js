const Products = require("../../models/Products");

/****************************
 * Filter Sorting Paginating
 ***************************/
class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryObj = { ...this.queryString };
    //console.log({ before: queryObj }); //before deleting
    const excludedFields = ["page", "sort", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]);

    //console.log({ after: queryObj }); //after deleting page

    let queryStr = JSON.stringify(queryObj);

    /*******************************
     *  gte = greater than or equal
     *  lte = lesser than or equal
     *  lt = lesser than
     *  gt = greater than
     *****************************/
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );
    //console.log({ queryStr });

    this.query.find(JSON.parse(queryStr));

    return this;
  }

  sorting() {
    if(this.queryString.sort){
        const sortBy = this.queryString.sort.split(',').join(' ')
        this.query = this.query.sort(sortBy)
    }else{
        this.query = this.query.sort('-createdAt')
    }

    return this;
  }

  paginating(){
    const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 10
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
    return this;
}
}


/**********************************
 * CREATE- READ - UPDATE - DELETE
 *********************************/

const productCtrl = {
  getProducts: async (req, res) => {
    try {
      const features = new APIfeatures(Products.find(), req.query).filtering().sorting().paginating()

      const products = await features.query;

      res.json({
        status: 'success',
        result: products.length,
        products: products
    })
    } catch (err) {
      return res.status(400).json({ msg: err.message });
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
