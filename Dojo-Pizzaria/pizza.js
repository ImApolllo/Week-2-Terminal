function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pie1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pie1);

var pie2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pie2);

var pie3 = pizzaOven("thin", "light", ["mozzarella"], ["pepperoni", "bacon"]);
console.log(pie3);

var crustType = [
    "thin",
    "deep dish",
    "original",
    "pan"
];

var sauceType = [
    "traditional",
    "light",
    "alfredo", 
    "cheese"
];

var cheeses = [
    "mozzarella", 
    "parmesian",
    "chedder",
    "vegan", 
    "feta", 
    "blue cheese"
];

var toppings = [
    "perpperoni", 
    "sausage", 
    "olives", 
    "peppers", 
    "bacon",
    "mushrooms",
    "ham", 
    "pineapple"
];

function randNum(arr){
    var i = Math.floor(arr.length * Math.random());
    return arr[i]
}
function randRange(start, end){
    return Math.floor(Math.random() * end - start) + start;
}

function randPizza(){
    var pizza = {};
    pizza.crustType = randNum(crustType);
    pizza.sauceType = randNum(sauceType);
    pizza.cheeses = [];
    pizza.toppings = [];
    for (i = 0; i < randRange(0, 4); i++){
        pizza.cheeses.push(randNum(cheeses));
    }
    for (i = 0; i < randRange(0, 7); i++){
        pizza.cheeses.push(randNum(toppings));
    }
    return pizza;
}

console.log(randPizza());
