const mongoose = require('mongoose');
const env = require('../config/environment');

const citiesSchema = new mongoose.Schema(
  {
      id: { type: Number },
      state_id: {
          type: Number,
          required: true,
      },
    name: { type: String, required: true },
    latitude: { type: String },
    longitude: { type: String },
  },
  {
    timestamps: true,
  }
);

const Cities = mongoose.model('Cities', citiesSchema);
module.exports = Cities;
