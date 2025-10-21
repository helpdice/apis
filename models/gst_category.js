const mongoose = require('mongoose');
const env = require('../config/environment');

const gstCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    cgst: { type: String },
    sgst: { type: String },
    igst: { type: String }
  },
  {
    timestamps: true,
  }
);

const GstCategory = mongoose.model('GstCategory', gstCategorySchema);
module.exports = GstCategory;
