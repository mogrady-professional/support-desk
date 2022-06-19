// Bring in async handler
const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

//@desc     Get user tickets
// @route   GET /api/tickets
// @access  Private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get tickets route",
  });
});

//@desc     Create new ticket
// @route   POST /api/tickets/
// @access  Private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Create ticket route",
  });
});

// Export the router
module.exports = {
  getTickets,
  createTicket,
};
