"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.morseCodePartOne = void 0;
const decoder_1 = require("./decoder");
class morseCodePartOne {
    static process(inputString) {
        const decodedString = this.decodeWords(inputString);
        return decodedString;
    }
    static decodeWords(inputString) {
        return inputString.split('   ')
            .map(s => this.decodeCharacters(s))
            .filter(s => s)
            .join(' ');
    }
    static decodeCharacters(inputString) {
        return inputString.split(' ')
            .map(s => decoder_1.decoder.decode(s))
            .join('');
    }
}
exports.morseCodePartOne = morseCodePartOne;
