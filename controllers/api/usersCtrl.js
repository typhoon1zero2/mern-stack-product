const User = require('../../models/Users');
const jwt = require('jsonwebtoken');
const Payments = require('../../models/Payments');
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login,
  checkToken, 
  addCart,
  history
};

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.status(200).json(req.exp);
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.status(200).json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
   
    // token will be a string
    const token = createJWT(user);
    // send back the token as a string
    // which we need to account for
    // in the client
    res.status(200).json(token);
  } catch (e) {
    res.status(400).json(e);
  }
}

async function addCart(req, res){
  try {
    const user = await User.findById(req.user.id)
            if(!user) return res.status(400).json({ msg: "User does not exist." })

            await User.findOneAndUpdate({_id: req.user.id}, {
                cart: req.body.cart
            })

             res.status(200).json({ msg: "Added to cart" })

  }catch(e) {
    res.status(400).json(e);
  }
}

async function history(req, res){
  try{
    const history = await Payments.find({ user_id : req.user.id });
    res.json(history)

  }catch(e) {
    res.status(400).json(e);
  }
}



/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}