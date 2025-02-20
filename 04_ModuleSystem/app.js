// const add = require("./math");

// const sum = add(2, 3);
// console.log(sum);

import { add, subtract } from "./operations.js";
import User from "./userProfile.js";

const sum2 = add(1, 2);
console.log(sum2);

const sub = subtract(3, 1);
console.log(sub);

const user = new User("Jessie", 28);
user.greet();
