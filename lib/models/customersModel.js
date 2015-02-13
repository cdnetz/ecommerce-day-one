var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema ({
	name: { type: String, required: true, uniqueness: true },
	age: { type: Number, min: 13, max: 120},
	email: { type: String, required: true, uniqueness: true },
	addresses: [{
		address: {type: String, required: true },
		city: {type: String, required: true },
		state: {type: String, required: true},
		zip: {type: String, required: true},
		kind: { type: String, enum: ['Billing', 'Shipping', 'Both'], default: 'Both'}
	}],
	phone: {type: String, required: true, uniqueness: true },
	password: {type: String, required: true, uniqueness: true },
	active: {type: Boolean, required: true},
	dateCreated: {type: Date, default: Date.now},
	dateUpdated: {type: Date, default: Date.now}
})




module.exports = Mongoose.model('Customer', schema);