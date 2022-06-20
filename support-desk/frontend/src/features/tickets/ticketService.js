import axios from "axios";
const API_URL = "/api/tickets/";

// Create new ticket
const createTicket = (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = axios.post(API_URL, ticketData, config); // Post new ticket to API

  return response.data;
};

// Get user tickets
const getTickets = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = axios.get(API_URL, config); // Post new ticket to API

  return response.data;
};

const ticketService = {
  createTicket,
  getTickets,
};

export default ticketService;
