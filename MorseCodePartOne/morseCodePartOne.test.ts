import { morseCodePartOne } from "./morseCodePartOne";

const cases = [
    ['.... . -.--   .--- ..- -.. .', "HEY JUDE"],
    ["... --- ...", "SOS"],
    [".- -... -.-.", "ABC"],
    ["   .   .", "E E"],
    [".   .   ", "E E"]
  ];
  
  test.each(cases)("Given %p, should return %p", (input, expected) => {
    const result = morseCodePartOne.process(input);
    expect(result).toBe(expected);
  });