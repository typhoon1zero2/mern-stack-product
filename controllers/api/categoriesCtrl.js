const Category = require('../../models/Category');



/********************************************
 * CREATE -READ - UPDATE - DELETE
 *******************************************/
const categoryCtrl = {
    getCategories: async(req, res) =>{
        //res.json('Category Test Ctrl')
        try{
            const categories = await Category.find()
            res.json(categories)

        }catch (err) {
            return res.status(200).json({ msg: err.message })
        }
    },
   
}

module.exports = categoryCtrl;