"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
const highAndLow_1 = require("./highAndLow");
const cases = [
    ["1 2 3 4 5", "5 1"],
    ["1 2 -3 4 5", "5 -3"],
    ["1 9 3 4 -5", "9 -5"],
    ["8 3 -5 42 -1 0 0 -9 4 7 4 -4", "42 -9"],
    ["1 2 3", "3 1"],
];
test.each(cases)("Given %p, should return %p", (input, expected) => {
    const result = highAndLow_1.highAndLow.process(input);
    expect(result).toBe(expected);
});
