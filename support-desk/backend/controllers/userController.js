// Register a user route
const registerUser = (req, res) => {
  res.send("Register Route");
};

// login a user route
const loginUser = (req, res) => {
  res.send("Login Route");
};

// Export the routes
module.exports = {
  registerUser,
  loginUser,
};
