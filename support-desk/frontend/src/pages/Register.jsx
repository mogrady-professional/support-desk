// import useState
import { useState } from "react";
// Import Toast
import { toast } from "react-toastify";
// Import FaUser
import { FaUser } from "react-icons/fa";
import React from "react";
// Global state selector hook (Connects react component to redux store)
import { useDispatch, useSelector } from "react-redux";
// Register action
import { register } from "../features/auth/authSlice";

function Register() {
  // Create state with formData object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  // Destructuring formData object
  const { name, email, password, password2 } = formData;

  // Auth Slice state
  const dispatch = useDispatch(); // Global state dispatch hook
  const { user, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  ); // Bring in auth state

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
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      // Dispatch register (from authSlice) action
      dispatch(register(userData));
    }
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register {user}
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={name}
              id="name"
              className="form-control"
              onChange={onChange}
              required
              placeholder="Enter your name"
            />
          </div>
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
            <input
              type="text"
              name="password2"
              value={password2}
              id="password2"
              className="form-control"
              onChange={onChange}
              placeholder="Confirm password"
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

export default Register;
