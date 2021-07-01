const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

//database middleware
Userschema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

//creating a database method
Userschema.methods.correctPassword = async function (
  inputPassword,
  userPassword
) {
  return bcrypt.compare(inputPassword, userPassword);
};

const User = mongoose.model('User', Userschema);

module.exports = User;
