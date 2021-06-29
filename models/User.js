const mongoose = require('mongoose');

const Userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'please include your name'],
    },
    email: {
      type: String,
      required: [true, 'please provide an email'],
      unique: [true, 'user with the given email already exist'],
    },

    password: {
      type: String,
      min: 6,
      max: 12,
      required: [true, 'password must be inlcuded'],
    },

    role: {
      type: String,
      enum: ['admin', 'user', 'cashier'],
      default: 'user',
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
//TODO: create user route e.g register
