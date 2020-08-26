const _ = require("lodash");
const fact = (n) => {
  if (n <= 1) return n;
  return n * fact(n - 1);
};
_.range(10)
  .map((i) => ++i)
  .map((i) => console.log(i + "! = " + fact(i)));
