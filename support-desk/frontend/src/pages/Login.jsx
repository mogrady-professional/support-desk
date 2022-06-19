// import useState
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// Import Toast
import { Toast } from "react-toastify";
// Import FaUser
import { FaSignInAlt } from "react-icons/fa";
import React from "react";
// Global state selector hook (Connects react component to redux store)
import { useDispatch, useSelector } from "react-redux";
// Register action
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Login() {
  // Create state with formData object
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Destructuring formData object
  const { email, password } = formData;

  // Auth Slice state
  const dispatch = useDispatch(); // Global state dispatch hook
  // Initialize useNavigate
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  ); // Bring in auth state

  // On form submit
  useEffect(() => {
    if (isError) {
      // Message set in authSlice.js (Redux)
      toast.error(message);
    }
    // Redirect when logged in
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate]);

  // Create onChange function for each input
  const onChange = (e) =>
    // setFormData({ ...formData, [e.target.name]: e.target.value }); (Method 1)
    // Method 2
    {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };

  // Create onSubmit function
  const onSubmit = async (e) => {
    e.preventDefault();
    // Construct user
    const userData = {
      email,
      password,
    };
    // Dispatch login (from authSlice) action
    dispatch(login(userData));
  };

  // Check for loading
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please login to get support</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="email"
              value={email}
              id="email"
              className="form-control"
              onChange={onChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="password"
              value={password}
              id="password"
              className="form-control"
              onChange={onChange}
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
