const mongoose = require("mongoose"); // Bring in Mongoose

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: [true, "Email already exists"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    isAdmin: {
      type: Boolean,
      required: [true, "Please add an admin status"],
      default: false,
    },
  },
  {
    timestamps: true,
  }
); // Create a new Schema

// export the model
module.exports = mongoose.model("User", userSchema); // Create a new Model
