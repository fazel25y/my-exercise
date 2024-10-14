//--1--
let myFood = new Map();
myFood.set(["pancakes", "omelet", "coffee"], "break fast");
myFood.set(["mushroom", "bacon cheeseburger", "salad"], "lunch");
myFood.set(["spagheti", "potato soup", "beef"], "dinner");
myFood.forEach(function (values, keys) {
  if (values === "break fast") {
    console.log(`we have ${keys},for ${values} `);
  }
  if (values === "lunch") {
    console.log(`we have ${keys},for ${values} `);
  }
  if (values === "dinner") {
    console.log(`we have ${keys},for ${values} `);
  }
});
//--2--
let data = /<[^<>]+>/g;
let pattern = `Explore results with the Tools below. Replace & List . Details lists capture groups. Explain.
<html> n plain English </html> describes your expression i <body> dd <h1> bb </h1>`;
let result = pattern.match(data);
console.log(result);
//--3--
let foodList = "pizza";
let userOrders = {
  orderId1: { id: 1234234345345, address: "tehran jordan", food: "salad" },
  orderId2: { id: 7774888895549, address: "tehran shemran", food: "pasta" },
  orderId3: { id: 6642343242346, address: "tehran zafar", food: "soup" },
};

const {
  orderId1: { food, address },
} = userOrders;
console.log(userOrders);
// let!==blockScop
