const mongoose = require('mongoose');
const env = require('../config/environment');

const placesSchema = new mongoose.Schema(
  {
    zone: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    name: { type: String },
    type: { type: String },
    establishment_year: { type: Number },
    time_needed_to_visit_in_hrs: { type: Number },
    rating: { type: Number },
    entrance_fee: { type: Number },
    airport_with_50km_radius: { type: String },
    weekly_off: { type: String },
    significance: { type: String },
    dslr_allowed: { type: String },
    best_time_to_visit: { type: String },
    latitude: { type: String },
    longitude: { type: String },
  },
  {
    timestamps: true,
  }
);

const Places = mongoose.model('Places', placesSchema);
module.exports = Places;
