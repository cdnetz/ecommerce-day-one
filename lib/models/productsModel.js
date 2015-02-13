var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema ({
	productName: {type: String, required: true, uniqueness: true },
	discription: {type: String, required: true },
	price: {type: String, required: true },
	productActive: {type: Boolean, required: true }
	// dateCreated: {type: Date, default: Date.now},
	// dateUpdated: {type: Date, default: Date.now}
})

module.exports = Mongoose.model('Product', schema);