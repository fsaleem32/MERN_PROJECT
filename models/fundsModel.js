const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const fundSchema = new Schema({

}, { timestamps: true });

module.exports = model('fundSchema', fundSchema);