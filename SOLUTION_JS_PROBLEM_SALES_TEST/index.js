var Cart = require('./src/Cart');

var cart1 = new Cart();
var cart2 = new Cart();
var cart3 = new Cart();

cart1.scanProduct('2 book at 12.49');
cart1.scanProduct('1 music CD at 14.99');
cart1.scanProduct('1 chocolate bar at 0.85');

cart2.scanProduct('1 imported box of chocolates at 10.00');
cart2.scanProduct('1 imported bottle of perfume at 47.50');

cart3.scanProduct('2 imported bottle of perfume at 27.99');
cart3.scanProduct('1 bottle of perfume at 18.99');
cart3.scanProduct('1 packet of headache pills at 9.75');
cart3.scanProduct('1 box of imported chocolates at 11.25');

console.log("\n");
console.log("Output 1");
console.log(cart1.bill());
console.log("\n");
console.log("Output 2");
console.log(cart2.bill());
console.log("\n");
console.log("Output 3");
console.log(cart3.bill());
