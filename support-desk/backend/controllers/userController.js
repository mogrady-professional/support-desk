// Import express-async-handler from express-async-handler
const asyncHandler = require("express-async-handler");
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

  res.send("Register Route");
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
