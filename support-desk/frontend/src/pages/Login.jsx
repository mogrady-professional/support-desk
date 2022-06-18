// import useState
import { useState } from "react";
// Import Toast
import { toast } from "react-toastify";
// Import FaUser
import { FaSignInAlt } from "react-icons/fa";
import React from "react";

function Login() {
  // Create state with formData object
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Destructuring formData object
  const { email, password } = formData;

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
  };

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
