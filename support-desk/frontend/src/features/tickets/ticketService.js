import axios from "axios";
const API_URL = "/api/tickets/";

// Create new ticket
export const createTicket = (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = axios.post(API_URL, ticketData, config); // Post new ticket to API

  return response.data;
};

const ticketService = {
  createTicket,
};

export default ticketService;
