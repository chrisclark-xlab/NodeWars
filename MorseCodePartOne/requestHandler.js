"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = moseCodePartOneRequestHandler;
const morseCodePartOne_1 = require("./morseCodePartOne");
function moseCodePartOneRequestHandler({ morseCode }) {
    if (!morseCode) {
        return "";
    }
    return morseCodePartOne_1.morseCodePartOne.process(morseCode);
}
