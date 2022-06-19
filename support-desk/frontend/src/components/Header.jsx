// Import Icons
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

import React from "react";

function Header() {
  const navigate = useNavigate(); // Initialize useNavigate
  const dispatch = useDispatch(); // Global state dispatch hook
  const { user } = useSelector((state) => state.auth); // Bring in auth state

  const onLogout = () => {
    dispatch(logout()); // Dispatch logout action
    dispatch(reset()); // Reset auth state
    navigate("/"); // Redirect to login page
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"> Support Desk </Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt />
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt />
                Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser />
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
