const digPow = require("./playingWithDigits");

test("digPow should return 1 when passed 92", function () {
  const numHasPower = digPow(89, 1);
  expect(numHasPower).toBe(1);
});

test("digPow should return -1 when passed 92", function () {
  const numHasPower = digPow(92, 1);
  expect(numHasPower).toBe(-1);
});

test("digPow should return 51 when passed 46288", function () {
  const numHasPower = digPow(46288, 3);
  expect(numHasPower).toBe(51);
});
