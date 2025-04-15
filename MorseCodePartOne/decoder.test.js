"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decoder_1 = require("./decoder");
const cases = [
    ["...", "S"],
    ["---", "O"],
    ["--..", "Z",],
    [".-", "A",],
];
test.each(cases)("Given %p, should return %p", (input, expected) => {
    const result = decoder_1.decoder.decode(input);
    expect(result).toBe(expected);
});
