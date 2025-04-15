"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const morseCodePartOne_1 = require("./morseCodePartOne");
const cases = [
    ['.... . -.--   .--- ..- -.. .', "HEY JUDE"],
    ["... --- ...", "SOS"],
    [".- -... -.-.", "ABC"],
    ["   .   .", "E E"],
    [".   .   ", "E E"]
];
test.each(cases)("Given %p, should return %p", (input, expected) => {
    const result = morseCodePartOne_1.morseCodePartOne.process(input);
    expect(result).toBe(expected);
});
