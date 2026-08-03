const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User with this Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "User created succesfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Sever error",
      error: error.message,
    });
  }
});

// Signin Route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // User suchen (nach der Email)
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Email or password incorrect",
      });
    }

    // Passwort vergleichen
    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      return res.status(400).json({
        message: "Email or password incorrect",
      });
    }

    res.status(200).json({
      message: "Signin successful",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

// Alle Router aus dieser Datei gehören zu meiner App
module.exports = router;
