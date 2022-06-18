// Import express-async-handler from express-async-handler
const asyncHandler = require("express-async-handler");
// Bring in bcryptjs
const bcryptjs = require("bcryptjs");
// Bring in jwt
const jwt = require("jsonwebtoken");
// Bring in the User Model
const User = require("../models/userModel");

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  //   console.log(req.body);
  // Destructure
  const { name, email, password } = req.body;
  // Validation
  if (!name || !email || !password) {
    // return res.status(400).json({ message: "Please include all fields" });
    res.status(400);
    // Standard express error handler (html file)
    throw new Error("Please include all fields");
  }

  // Find if user already exists
  const userExists = await User.findOne({ email }); // Find if user already exists

  if (userExists) {
    res.status(400);
    // Throw client error
    throw new Error("User already exists");
  }
  // Hash password with bcryptjs
  const salt = await bcryptjs.genSalt(10); // Generate a salt (10 rounds)
  const hashedPassword = await bcryptjs.hash(password, salt); // Hash the password with the salt

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  // Send response
  if (user) {
    // Return JSON response -> 201 Created
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
  //   res.send("Register Route");
});

// @desc    Login a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body; // Destructure
  const user = await User.findOne({ email }); // Find if user already exists
  // Compare hashed password with plain text password using a method called compare
  if (user && (await bcryptjs.compare(password, user.password))) {
    // Return JSON response -> 200 OK
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    // Return JSON response -> 401 Unauthorized
    res.status(401);
    throw new Error("Invalid credentials");
  }
  //   res.send("Login Route");
});

//@desc    Get current user
// @route   POST /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  //   res.send("me");
  // Get user details from token
  //   res.status(200).json(req.user);
  // destructure req.user
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
});

// Generate token
const generateToken = (id) => {
  // Sign token
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Export the routes
module.exports = {
  registerUser,
  loginUser,
  getMe,
};
