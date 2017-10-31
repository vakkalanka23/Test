var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
 
var documentSchema = new Schema({
 
    firstName: { type: String, required: true }, // first name required
    lastName: { type: String, required: true }, // last name required
    Status: {type: Boolean, default: true}, // status with default true
    email: {type: String, required: true, unique: true},
    password: { type: String, required: true },
    dateRegistered: {type: Date, default: Date.now },
 
    char: { type: String, required: true },
    number: { type: Number, min: 16, max: 60},
    
});
 
module.exports =
 Mongoose.model('documents', documentSchema);