const mongoose = require('mongoose');
const env = require('../../config/environment');

const currencySchema = new mongoose.Schema(
  {
    capital: {
        type: String,
        required: true
    },
    continentName: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const Currency = mongoose.model('Currency', currencySchema);
module.exports = Currency
