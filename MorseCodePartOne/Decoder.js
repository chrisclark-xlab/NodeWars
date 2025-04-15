"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decoder = void 0;
const MorseCodeMap_1 = __importDefault(require("./MorseCodeMap"));
class decoder {
    static decode(input) {
        const mappedInput = MorseCodeMap_1.default[input];
        return mappedInput;
    }
}
exports.decoder = decoder;
