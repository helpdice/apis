const mongoose = require('mongoose');
const env = require('../config/environment');

const appUpdateSchema = new mongoose.Schema(
  {
    app: { 
        type: String, 
        required: true 
    },
    name: {
        type: String,
        required: true
    },
    description: { 
        type: String, 
        required: true 
    },
    version: { 
        type: Number,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    ilink: {
      type: String,
    },
    wlink: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const AppUpdate = mongoose.model('AppUpdate', appUpdateSchema);
module.exports = AppUpdate;
