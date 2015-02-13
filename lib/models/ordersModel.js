var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema ({
	customer: {type: Schema.Types.ObjectId, ref: "Customer"},
	products: [{type: Schema.Types.ObjectId, ref: "Product"}],
	orderName: {type: String, required: true},
	orderNumber: {type: Number, required: true, uniqueness: true },
	paymentInfo: [{
		cardNumber : {type: Number, required: true, uniqueness: true },
		expiration: {type: String, required: true },
		cid: {type: Number, required: true}
	}],
	salesTax : {type: Number, default: 7},
	dateCreated: {type: Date, default: Date.now},
	dateUpdated: {type: Date, default: Date.now}
	
	
})



// products: [{type: Schema.Types.ObjectId, ref: "Product"}]
// order = {
// 	orderName: "aldfjl;dasf",
// 	orderNumber: 123,
// 	customer: 2354345345,
// 	products: [2354, 14501144035, 245245424, 23542354];
// };

// Order.find({orderName: "aldfjl;dasf"}).populate("customer").exec(function(err, order){
// 	order.customer.name
// })14