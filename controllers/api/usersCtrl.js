const Users = require("../../models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  checkToken,
  register,
  login,
  logout,
  refreshToken,
  getUser
};
function checkToken(req, res) {
  console.log("req.user", req.user);
  res.status(200).json(req.exp);
}

//register function
async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    const user = await Users.findOne({ email });
    if (user) return res.status(400).json({ msg: "Email already Exists!!!" });

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

    //res.json(newUser)
    // res.json({password , passwordHash})
    //res.json( { msg: "Register Success "});

    //Create JWT to authentication
    const accesstoken = createAccessToken({ id: newUser._id });
    const refreshtoken = createRefreshToken({ id: newUser._id });

    res.cookie("refreshToken", refreshtoken, {
      httpOnly: true,
      path: "/user/refresh_token",
      //maxAge: 7*24*60*60*1000 // 7d
    });

    res.json({ accesstoken });
  } catch (err) {
    return res.status(200).json({ msg: err.message });
  }
}
//Login function
async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User does not Exist!!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ msg: "Incorrect Password!!!!." });

    // If login success...create access token and refresh token
    //res.json({ msg: 'Login Success!!'})
    const accesstoken = createAccessToken({ id: user._id });
    const refreshtoken = createRefreshToken({ id: user._id });

    res.cookie("refreshtoken", refreshtoken, {
      httpOnly: true,
      path: "/user/refresh_token",
    });
  } catch (err) {
    return res.status(200).json({ msg: err.message });
  }
}

//Logout function
async function logout(req, res) {
  try {
    res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
    return res.json({ msg: "Logged out" });
  } catch (err) {
    return res.status(200).json({ msg: err.message });
  }
}

//Refresh Tooken
async function refreshToken(req, res) {
  try {
    const rf_token = req.cookies.refreshtoken;
    if (!rf_token)
      return res.status(400).json({ msg: "Please Login or Register" });

    jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).json({ msg: "Please Login or Register" });

      const accesstoken = createAccessToken({ id: user.id });

      res.json({ accesstoken });
    });
  } catch (err) {
    return res.status(200).json({ msg: err.message });
  }
}

//Get User
async function getUser(req, res) {
  try {
    const user = await Users.findById(req.user.id).select('-password')
    if(!user) return res.status(400).json({msg: "User does not exist!!!"})

    res.json(user)
} catch (err) {
    return res.status(200).json({msg: err.message})
}
}

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30m" });
};
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};
