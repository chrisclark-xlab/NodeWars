export class highAndLow {
  static process(numberString: String) {
    const numbers = numberString
      .split(" ")
      .map(Number)
      .sort((x, y) => {
        return x - y;
      });

    const lowest = numbers[0];
    const highest = numbers[numbers.length - 1];
    return `${highest} ${lowest}`;
  }
}
