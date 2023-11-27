const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const emailRegex = /.+\@.+\..+/; // Regular expression for email validation

const userSchema = new Schema({
  firstName: {
    type: String,
    required: "You must enter a name.",
    trim: true,
  },
  lastName: {
    type: String,
    required: "You must enter a name.",
    trim: true,
  },
  username: {
    type: String,
    required: "Enter a Username",
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [emailRegex, "Please enter a valid email address."], // Improved email validation
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  // ... other fields like videos and comments
});

// Password hashing in pre-save hook
userSchema.pre("save", async function (next) {
  try {
    if (this.isNew || this.isModified("password")) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
  } catch (error) {
    // Comprehensive error handling
    next(error);
  }
});

// Password verification method
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model("User", userSchema);

module.exports = User;
