const express = require("express"); // Express web server framework
const router = express.Router(); // Create a new Express router
// Bring in the routes
const { registerUser, loginUser } = require("../controllers/userController");

// Create a post route
router.post("/", registerUser);

// Create a login route
router.post("/login", loginUser);

// export the router
module.exports = router;
