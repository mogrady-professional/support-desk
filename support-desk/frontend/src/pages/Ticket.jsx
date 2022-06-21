import { useEffect } from "react";
import React from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { getTicket, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

function Ticket() {
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ticketId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
  }, [isError, message, ticketId]);

  return <div>Ticket</div>;
}

export default Ticket;
