// Bring in express
const express = require("express");
const router = express.Router();
const { getTickets, createTicket } = require("../controllers/ticketController");
// Bring in middleware
const { protect } = require("../middleware/authMiddleware");

// Protected route to get users tickets
router.route("/").get(protect, getTickets).post(protect, createTicket);

// Export the router
module.exports = router;
