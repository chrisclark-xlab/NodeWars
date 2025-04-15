import { decoder } from "./decoder";

const cases = [
    ["...", "S"],
    ["---", "O"],
    ["--..", "Z",],
    [".-", "A", ],
  ];
  
  test.each(cases)("Given %p, should return %p", (input, expected) => {
    const result = decoder.decode(input);
    expect(result).toBe(expected);
  });