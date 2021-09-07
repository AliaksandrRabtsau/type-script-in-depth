/// <reference path="utility-functions.ts" />

import util = Utility.Fees;

const result1 = util.calculateLateFee(20);
console.log(result1);

const result2 = Utility.maxBooksAllowed(30);

console.log(result2);
