"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stopGnippips_1 = __importDefault(require("./stopGnippips"));
test("Four letters words not reversed", () => {
    const result = (0, stopGnippips_1.default)("test");
    expect(result).toBe("test");
});
test("Five letters words should be reversed", () => {
    const result = (0, stopGnippips_1.default)("tests");
    expect(result).toBe("stset");
});
const cases = [
    ["Hey fellow warriors", "Hey wollef sroirraw"],
    ["This is a test", "This is a test"],
    ["This is another test", "This is rehtona test"],
];
test.each(cases)("Given %p, should return %p", (input, expected) => {
    const result = (0, stopGnippips_1.default)(input);
    expect(result).toBe(expected);
});
