const userModel = require("../models/usermodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const loginControl = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: "User Not Found", success: false });
    }
    // if (req.body.password == user.password) {
    //   const token = jwt.sign({ id: user._id }, process.env.KEY_SECRET, {
    //     expiresIn: "1d",
    //   });
    //   return res.status(200).send({ message: "Login Success", success: true });
    // }
    const matchPass = await bcrypt.compare(req.body.password, user.password);
    if (!matchPass) {
      return res
        .status(200)
        .send({ message: "Invalid User or Password", success: false });
    }
    const token = jwt.sign({ id: user._id }, process.env.KEY_SECRET, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .send({ message: "Login Success", success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `${error.message}`, success: false });
  }
};
const registerControl = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(200)
        .send({ message: `User Already Exist`, success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    req.body.password = hashPassword;
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Register Success", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `${error.message}`, success: false });
  }
};

const homeControl = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    console.log(user)
    if (!user) {
      return res
        .status(200)
        .send({ message: `User not found`, success: false });
    } else {
      res.status(200).json({
        message: "Register Success",
        success: true,
        data: {
          name: user.name,
          email: user.email,
          id:user._id,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: `Authorization Error`, success: false, error });
  }
};

module.exports = { loginControl, registerControl, homeControl};
