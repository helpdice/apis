const mongoose = require('mongoose');
const env = require('../config/environment');

const statesSchema = new mongoose.Schema(
  {
    id: { type: Number },
    country_id: {
        type: Number,
        required: true,
    },
    name: { type: String, required: true },
    state_code: { type: String },
    type: { type: String },
    latitude: { type: String },
    longitude: { type: String },
  },
  {
    timestamps: true,
  }
);

const States = mongoose.model('States', statesSchema);
module.exports = States;
