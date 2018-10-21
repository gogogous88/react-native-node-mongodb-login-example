const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  profile: {
    name: { type: String },
    role: { type: Boolean }
  }
});

module.exports = mongoose.model("User", UserSchema);
