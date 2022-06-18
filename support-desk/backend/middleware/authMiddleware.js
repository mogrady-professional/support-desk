// Bring in jwt
const jwt = require("jsonwebtoken");
// Bring in express-async-handler
const asyncHandler = require("express-async-handler");
// Bring in User Model
const User = require("../models/userModel");

// async function to protect routes
const protect = asyncHandler(async (req, res, next) => {
  // initialize token
  let token;
  // check if token is in the header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // set token to the part after "Bearer "
      token = req.headers.authorization.split(" ")[1];
      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Get user from token
      req.user = await User.findById(decoded.id).select("-password"); // exclude password from response
      // continue to next middleware
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized");
  }
});

// Export the protect middleware
module.exports = { protect };
