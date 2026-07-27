
const express = require("express");
const router = express.Router();

const User = require("../models/User");


// Signup Route
router.post("/signup", async (req, res) => {

    try {

        const { name, email, password } = req.body;


        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }


        const newUser = new User({
            name,
            email,
            password
        });


        await newUser.save();


        res.status(201).json({
            message: "User created succesfully"
        });


    } catch (error) {

        res.status(500).json({
            message: "Sever error",
            error: error.message
        });

    }

});


module.exports = router;