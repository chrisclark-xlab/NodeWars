"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = spinWords;
function spinWords(sentence) {
    const words = sentence.split(" ");
    return words
        .map((w) => {
        if (shouldSpinWord(w)) {
            return spinWord(w);
        }
        return w;
    })
        .join(" ");
}
function shouldSpinWord(word) {
    return word.length > 4;
}
function spinWord(word) {
    return word.split("").reverse().join("");
}
