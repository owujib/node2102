const mongoose = require('mongoose');

const catgorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'a catgory must have a title 😡😡😒'],
    },
  },

  { timestamps: true }
);

const Category = mongoose.model('Category', catgorySchema);

module.exports = Category;
