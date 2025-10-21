const mongoose = require('mongoose');
const env = require('../config/environment');

const countriesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    iso3: { type: String },
    iso2: { type: String },
    numeric_code: { type: String },
    phone_code: { type: String },
    capital: { type: String },
    currency: { type: String },
    currency_name: { type: String },
    currency_symbol: { type: String },
    tld: { type: String },
    native: { type: String },
    region: { type: String },
    subregion: { type: String },
    timezones: [
      {
        zoneName: { type: String },
        gmtOffset: { type: String },
        gmtOffsetName: { type: String },
        abbreviation: { type: String },
        tzName: { type: String },
      }
    ],
    translations: { type: Object },
    latitude: { type: String },
    longitude: { type: String },
    emoji: { type: String },
    emojiU: { type: String }
  },
  {
    timestamps: true,
  }
);

const Countries = mongoose.model('Countries', countriesSchema);
module.exports = Countries;
