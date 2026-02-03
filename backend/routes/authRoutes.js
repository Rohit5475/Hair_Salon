const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password, phone, gender, role } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists)
    return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    phone,
    gender,
    role,
  });

  res.status(201).json({ message: "Registered successfully" });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user)
    return res.status(401).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(401).json({ message: "Invalid credentials" });

  res.json({
    message: "Login successful",
    token: generateToken(user),
    role: user.role,
    userId: user._id,
  });
});

// example
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/admin-dashboard", protect, adminOnly, (req, res) => {
  res.json({ message: "Welcome Admin" });
});


module.exports = router;
