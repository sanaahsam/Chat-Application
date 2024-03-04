import express from "express";
import User from "../models/authmodel.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const Signup = async (req, res) => {
  try {
    const { fullname, username, confirmpassword, password, gender } = req.body;
    if (password !== confirmpassword) {
      return Error("pasword do not match");
    }
    const user = await User.findOne({ username });
    if (user) {
      throw Error("Username already exist");
    }
    const boypfppic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlpfppic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      fullname,
      username,
      password: hashedpassword,
      gender,
      profilepic: gender === "Male" ? boypfppic : girlpfppic,
    });
    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(200).json({
        _id: newUser._id,
        fullName: newUser.fullname,
        userName: newUser.username,
        profilepic: newUser.profilepic,
      });
    } else {
      throw Error("Inavlid user data");
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//LOGIN -------------------------------------

export const Login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      throw Error("Incorrect username");
    }
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      throw Error("Incorrect pasword");
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullname,
      userName: user.username,
      Profilepic: user.profilepic,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const Logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout succesfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
