const express = require('express');
const mongoose = require('mongoose');

const { Schema } = mongoose;
const costSchema = new Schema({
  buy: String,
  price: Number,
  date: String
});

module.exports = Cost = mongoose.model('costs', costSchema);
