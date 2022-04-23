require('dotenv').config();
const Users = require("../../models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  checkToken,
  register,
  login,
};
function checkToken(req, res) {
  console.log("req.user", req.user);
  res.status(200).json(req.exp);
}

/*********************************
 * register function
 ***********************************/
async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    const user = await Users.findOne({ email });
    if (user) return res.status(200).json({ msg: "Email already Exists!!!" });

    if (password.length < 4)
      return res.status(400).json({ msg: "Password at least 4 characters" });

    // Password Encryption
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new Users({
      name,
      email,
      password: passwordHash,
    });
    //Save mongodb
    await newUser.save();

  } catch (err) {
    return res.status(200).json({ msg: err.message });
  }
}
/*****************************************
 * Login function
 ****************************************/
async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User does not Exist!!" });
    delete user.password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ msg: "Incorrect Password!!!!." });
    const payload  =  {...user}
    const token = jwt.sign(payload, process.env.SECRET)
    res.status(200).json({ token : token })
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }
}

/*********************************************
 * Logout function
 ********************************************/
