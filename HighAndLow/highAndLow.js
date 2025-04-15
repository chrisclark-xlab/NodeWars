"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highAndLow = void 0;
class highAndLow {
    static process(numberString) {
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
exports.highAndLow = highAndLow;
