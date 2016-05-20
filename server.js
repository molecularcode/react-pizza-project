var express = require('express');
var app = express();

/*
this says: serve all the files in the src directory if they match the URL

For example, if the client requests http://server/css/app.css then the file in src/css/app.css will be served
But if the client requests http://server/step-2 then since there is no file by that name the middleware will call next()
*/
app.use(express.static(__dirname + '/src'));

/* insert any app.get or app.post you need here. only if you do the advanced part */

/*
This says: for any path NOT served by the middleware above, send the file called index.html instead.
For example, if the client requests http://server/step-2 the server will send the file index.html. Then on the browser, React Router will load the appropriate component
*/

app.get('/pizzas', function(req, res) {
    res.json([{
      pizzaName: 'customToppings',
      pizzaImg: '../images/customToppings.jpg',
      pizzaPrice: 10.00,
      pizzaToppings: "+ the price of up to 4 toppings"
    }, {
      pizzaName: 'cheese',
      pizzaImg: '../images/cheese.jpg',
      pizzaPrice: 17.99,
      pizzaToppings: "cheese"
    }, {
      pizzaName: 'pepperoni',
      pizzaImg: '../images/pepperoni.jpg',
      pizzaPrice: 18.99,
      pizzaToppings: "cheese, pepperoni"
    }, {
      pizzaName: 'hawaiian',
      pizzaImg: '../images/hawaiian.jpg',
      pizzaPrice: 18.99,
      pizzaToppings: "mozzarella cheese, ham, pineapple"
    }, {
      pizzaName: 'allDressed',
      pizzaImg: '../images/allDressed.jpg',
      pizzaPrice: 19.99,
      pizzaToppings: "mozzarella cheese, pepperoni, mushrooms & peppers"
    }, {
      pizzaName: 'quebecoise',
      pizzaImg: '../images/quebecoise.jpg',
      pizzaPrice: 19.99,
      pizzaToppings: "mozzarella cheese, pepperoni, mushrooms, bacon"
    }, {
      pizzaName: 'vegetarian',
      pizzaImg: '../images/vegetarian.jpg',
      pizzaPrice: 19.99,
      pizzaToppings: "mozzarella cheese, mushrooms, peppers, olives & tomatoes"
    }, {
      pizzaName: 'mexican',
      pizzaImg: '../images/mexican.jpg',
      pizzaPrice: 19.99,
      pizzaToppings: "mozzarella cheese, beef, olives, tomatoes, onions & hot pappers"
    }, {
      pizzaName: 'meatLovers',
      pizzaImg: '../images/meatLovers.jpg',
      pizzaPrice: 20.99,
      pizzaToppings: "mozzarella cheese, pepperoni, beef, bacon & sausage"
    }, {
      pizzaName: 'phillysteak',
      pizzaImg: '../images/phillysteak.jpg',
      pizzaPrice: 20.99,
      pizzaToppings: "mozzarella cheese, phillysteak, red onions, mushrooms & peppers"
    }]);
});


app.get('/toppings', function(req, res) {
  res.json([{
    toppingName: 'mozzarella',
    toppingImg: '../images/ingredients/mozzarella.jpg',
    toppingPrice: 1.99
  }, {
    toppingName: 'parmesan',
    toppingImg: '../images/ingredients/parmesan.jpg',
    toppingPrice: 1.99
  }, {
    toppingName: 'goatsCheese',
    toppingImg: '../images/ingredients/goatsCheese.jpg',
    toppingPrice: 2.99
  }, {
    toppingName: 'tomatoes',
    toppingImg: '../images/ingredients/tomatoes.jpg',
    toppingPrice: 0.99
  }, {
    toppingName: 'spinach',
    toppingImg: '../images/ingredients/spinach.jpg',
    toppingPrice: 1.50
  }, {
    toppingName: 'olives',
    toppingImg: '../images/ingredients/olives.jpg',
    toppingPrice: 1.50
  }, {
    toppingName: 'peppers',
    toppingImg: '../images/ingredients/peppers.jpg',
    toppingPrice: 1.50
  }, {
    toppingName: 'mushrooms',
    toppingImg: '../images/ingredients/mushrooms.jpg',
    toppingPrice: 1.50
  }, {
    toppingName: 'pineapple',
    toppingImg: '../images/ingredients/pineapple.jpg',
    toppingPrice: 1.50
  }, {
    toppingName: 'onions',
    toppingImg: '../images/ingredients/onions.jpg',
    toppingPrice: 1.50
  }, {
    toppingName: 'bacon',
    toppingImg: '../images/ingredients/bacon.jpg',
    toppingPrice: 2.99
  }, {
    toppingName: 'pepperoni',
    toppingImg: '../images/ingredients/pepperoni.jpg',
    toppingPrice: 2.99,
  }, {
    toppingName: 'ham',
    toppingImg: '../images/ingredients/ham.jpg',
    toppingPrice: 2.99
    }]);
});

app.get('/*', function(request, response) {
  response.sendFile(__dirname + '/src/index.html');
});
app.listen(process.env.PORT || 8080, function() {
  console.log('server started');
});