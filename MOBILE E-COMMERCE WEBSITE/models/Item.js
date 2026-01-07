const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateAdded: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Item', itemSchema);









// helloMessage: {
// type: String, // New field for the dynamic message
// default: function () {
//     return `Hello ${this.name}!`;

// helloMessage: {type:string, default: function(){
//     return `Hello${this.name}!`;
// },},