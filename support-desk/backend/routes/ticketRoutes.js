// Bring in express
const express = require("express");
const router = express.Router();
const {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
} = require("../controllers/ticketController");
// Bring in middleware
const { protect } = require("../middleware/authMiddleware");

// Reroute into note router
const noteRouter = require("./noteRoutes");
router.use("/:ticketId/notes", noteRouter);

// Protected route to get users tickets
router.route("/").get(protect, getTickets).post(protect, createTicket);
// Get ticket by id; getdelete/put ticket
router
  .route("/:id")
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket);

// Export the router
module.exports = router;
