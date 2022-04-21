const Users = require('../../models/Users');
const bcrypt = require('bcrypt')

module.exports = {
  register,
  // login,
  // checkToken
};

async function register(req, res){
    try {
      const { name, email, password } = req.body;
      const user = await Users.findOne({email})
      if(user)return res.status(400).json({ msg: "Email already Exists!!!" });

      if(password.length < 4 )
        return res.status(400).json( { msg: "Password at least 4 characters"});
      
      // Password Encryption
      const passwordHash = await bcrypt.hash(password, 10)
      const newUser = new Users({
        name, email, password: passwordHash
    })
    //Save mongodb
    await newUser.save()

    //res.json(newUser)
    // res.json({password , passwordHash})
    res.json( { msg: "Register Success "});


    } catch(err) {
      return res.status(200).json( { msg: err.message })

    }
  }



