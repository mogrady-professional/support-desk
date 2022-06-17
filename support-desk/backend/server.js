const express = require("express"); // Express web server framework
const dotenv = require("dotenv").config(); // Load environment variables from .env file

const PORT = process.env.PORT || 5000; // Port to listen on
const app = express(); // Create a new Express application

// Create a route with express
app.get("/", (req, res) => {
  //   res.send("Hello World!"); // Send a response

  // JSON Response
  //   res.json({
  //     message: "Welcome to the Support Desk API",
  //   });

  // JSON Response with 201 Create Status Code
  //   res.status(201).json({
  //     message: "Welcome to the Support Desk API",
  //   });

  // JSON Response with 20 OK Status Code
  res.status(200).json({
    message: "Welcome to the Support Desk API",
  });
});

/* Send a GET request using Postman to test the server
http://localhost:5000/
*/

// Pass to routes
app.use("/api/users", require("./routes/userRoutes"));
/* Send a POST request using Postman to test the request
http://localhost:5000/
*/

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}); // Listen for requests on the given port
