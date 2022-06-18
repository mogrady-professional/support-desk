// Bring in Mongoose
const mongoose = require("mongoose");
// Connection to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold,
      `${conn.connection.port}`.cyan.underline.bold,
      `${conn.connection.name}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    // Exit process with failure
    process.exit(1);
  }
};

// Export the connection
module.exports = connectDB;
