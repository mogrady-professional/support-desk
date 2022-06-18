// Import express-async-handler from express-async-handler
const asyncHandler = require("express-async-handler");
// Bring in bcryptjs
const bcryptjs = require("bcryptjs");
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
    // Return JSON response
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
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
  res.send("Login Route");
});

// Export the routes
module.exports = {
  registerUser,
  loginUser,
};
