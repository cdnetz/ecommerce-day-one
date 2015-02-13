var Express = require ('express');
var BodyParser = require ('body-parser');
var Mongoose = require ('mongoose');
var Customer = require('./lib/models/customersModel');
var Product = require('./lib/models/productsModel');
var Order = require('./lib/models/ordersModel');

var port = 8011;

var app = Express();
var mongoUri = "mongodb://localhost:27017/ecommerce";

Mongoose.connect(mongoUri);
Mongoose.connection.once('open', function() {
	console.log("connected to db at " + mongoUri);
});

app.use(BodyParser.json());

app.post('/api/customer', function(req, res){
	var customer = new Customer(req.body);
	customer.save(function(err, responce){
		if(!err){
			res.status(200).json(customer);
		} else {
			res.status(418).json(err);
		}
	})
});

app.post('/api/product', function(req, res){
	var product = new Product(req.body);
	product.save(function(err, responce){
		if(!err){
			res.status(200).json(product);
		} else {
			res.status(418).json(err);
		}
	})
});

app.post('/api/order', function (req, res) {
	var order = new Order(req.body);
	order.save(function(err, responce){
		if(!err){
			res.status(200).json(order);
		} else {
			res.status(418).json(err);
		}
	})
});


app.listen(port, function(){
	console.log('now listening on port: ' + port);
});