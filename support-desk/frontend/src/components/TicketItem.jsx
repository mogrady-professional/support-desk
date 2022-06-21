import React from "react";
import { Link } from "react-router-dom";

function TicketItem({ ticket }) {
  const date = new Date(ticket.createdAt);
  const time = date.toLocaleTimeString("en-UK", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return (
    <div className="ticket">
      <div>{date.toLocaleDateString("en-UK")}</div>
      <div>{time}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <Link to={`/ticket/${ticket._id}`} className="btn btn-reverse btn-sm">
        View
      </Link>
    </div>
  );
}

export default TicketItem;
