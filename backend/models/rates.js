const mongoose = require("mongoose");

const ratesSchema = new mongoose.Schema({
  courseRate: { type: String, required: true },
});

const model = mongoose.model(`rates`, ratesSchema);
module.exports = model;
