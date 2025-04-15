import spinWords from "./stopGnippips";

test("Four letters words not reversed", () => {
  const result = spinWords("test");
  expect(result).toBe("test");
});

test("Five letters words should be reversed", () => {
  const result = spinWords("tests");
  expect(result).toBe("stset");
});

const cases = [
  ["Hey fellow warriors", "Hey wollef sroirraw"],
  ["This is a test", "This is a test"],
  ["This is another test", "This is rehtona test"],
];

test.each(cases)("Given %p, should return %p", (input, expected) => {
  const result = spinWords(input);
  expect(result).toBe(expected);
});
