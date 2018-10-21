const mongoose = require("mongoose");
require("../modules/user");
const User = mongoose.model("User");

exports.authController = (req, res, next) => {
  let { email, password, name, role } = req.body;

  if (!email) {
    res.send({ error: "provide email please" }); //what if forgot to provid data
  }
  if (!password) {
    res.send({ error: "provide password please" });
  }
  if (!name) {
    res.send({ error: "provide name please" });
  } else {
    User.findOne({ email }, (err, existingUser) => {
      if (err) {
        console.log(err);
      } else {
        if (!!existingUser) {
          //null still give you a object, but !!null give false !!'somthing' give true;
          res.send({ error: "the user is already exist" });
        } else {
          new User({
            email,
            password,
            profile: { name, role }
          }).save((err, user) => {
            if (err) {
              next(err); //what if data type is not right saving cannot done.
            } else {
              const userInfo = {
                id: user._id,
                email: user.email,
                password: user.password,
                role: user.profile.role,
                name: user.profile.name
              };
              res.status(200).json({ user: userInfo });
            }
          });
        }
      }
    });
  }
};

exports.loginController = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.send({ error: 'please enter "email/password")' });
  } else {
    User.findOne({ email, password }, (err, existingUser) => {
      if (err) {
        next(err);
      } else {
        if (!existingUser) {
          res.send({ login: 0, err: "this email has not been registered" });
        } else {
          const { _id, email, password, profile } = existingUser;
          res.json({ login: 1, user: { id: _id, email, profile, password } });
        }
      }
    });
  }
};

//to create an api you must know:

/*
1. what if the user forgot to provide specific data. (this is before saving)
2. what if the user provided wrong types of data. (this is during saving)
*/
