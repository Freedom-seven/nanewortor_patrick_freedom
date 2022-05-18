const convertNum = require("./Answers/convertNumToWords.js");
const currency = require("./Answers/currency.js");
const secondLargestNum = require("./Answers/secondLargestNum.js");
const userDetails = require("./Answers/Debug.js");

// Convert Number to Words
console.log(convertNum(123));

// Currency convertor
console.log(currency(100, "CAD"));
console.log(currency(100, "USD"));
console.log(currency(100, "CNY"));
console.log(currency(100, "GBP"));
console.log(currency(100, "GHS"));

// Second Largest Number
console.log(secondLargestNum([10, 450, 55, 600, 110, 1500, 900, 1000, 225]));

// User Details
console.log(userDetails);
