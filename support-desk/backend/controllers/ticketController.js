// Bring in async handler
const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

// @desc     Get user tickets
// @route   GET /api/tickets
// @access  Private
const getTickets = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  // Get tickets using the user id
  const tickets = await Ticket.find({ user: req.user.id });

  res.status(200).json(tickets);
});

// @desc     Get user ticket
// @route   GET /api/tickets/:id
// @access  Private
const getTicket = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  // Get tickets using the user id
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(404); // Not found
    throw new Error("Ticket not found");
  }
  // Limit ticket to user
  if (ticket.user.toString() !== req.user.id) {
    res.status(401); // Unauthorized
    throw new Error("Not authorized");
  }

  res.status(200).json(ticket);
});

// @desc     Create new ticket
// @route   POST /api/tickets/
// @access  Private
const createTicket = asyncHandler(async (req, res) => {
  // Send body and description to the ticket model
  const { product, description } = req.body;
  if (!product || !description) {
    res.status(400); // Bad request
    throw new Error("Please provide a product and description");
  }

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  // Create ticket
  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status: "new",
  });

  // Created
  res.status(201).json(ticket);
});

// @desc     Delete user ticket
// @route   DELETE /api/tickets/:id
// @access  Private
const deleteTicket = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  // Get tickets using the user id
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(404); // Not found
    throw new Error("Ticket not found");
  }
  // Limit ticket to user
  if (ticket.user.toString() !== req.user.id) {
    res.status(401); // Unauthorized
    throw new Error("Not authorized");
  }
  await ticket.remove(); // Delete ticket

  res.status(200).json({ success: true });
});

// @desc    Update ticket
// @route   PUT /api/tickets/:id
// @access  Private
const updateTicket = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  // Get tickets using the user id
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(404); // Not found
    throw new Error("Ticket not found");
  }
  // Limit ticket to user
  if (ticket.user.toString() !== req.user.id) {
    res.status(401); // Unauthorized
    throw new Error("Not authorized");
  }

  const updatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  ); // Return updated ticket

  res.status(200).json(updatedTicket);
});

// Export the router
module.exports = {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
  updateTicket,
};
