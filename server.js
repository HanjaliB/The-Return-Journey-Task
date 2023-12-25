//REST API demo in Node.js
var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object

// Endpoint to Get a list of products
app.get('/getProducts', function(req, res){
    fs.readFile(__dirname + "/" + "products.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})

//Step 1: Create a new product variable
var user = {
    "product5": {
        "id":5,
        "productname":"Air Pods"
      },
} 


//The addProduct endpoint
app.post('/addProduct', function(req, res){
    //Step 2: read existing products
    fs.readFile(__dirname + "/" + "products.json", 'utf8', function(err, data){
        data = JSON.parse(data);
        //Step 3: append product variable to list
        data["product5"] = product["product5"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

//Endpoint to get a single product by id
app.get('/:id', function (req, res) {
    // First retrieve existing product list
    fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
       var products = JSON.parse( data );
       var products = products["product" + req.params.id] 
       console.log( product );
       res.end( JSON.stringify(product));
    });
 })

 //Code to delete a product by id
 var id = 3;
 app.delete('/deleteProduct', function (req, res) {
    // First retrieve existing products
    fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["product" + 3];
        
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

// Create a server to listen at port 8082
var server = app.listen(8082, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})
 