const express = require("express"); // Express web server framework
const router = express.Router(); // Create a new Express router
// Bring in the routes
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
// Bring in the protect middleware
const { protect } = require("../middleware/authMiddleware");
/*
Any route that needs to be protected by the protect middleware add protect to the route
*/

// Create a post route
router.post("/", registerUser);

// Create a login route
router.post("/login", loginUser);

// Crete a user route
router.get("/me", protect, getMe);

// export the router
module.exports = router;
