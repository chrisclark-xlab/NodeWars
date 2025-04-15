"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = stopGninnipSRequestHandler;
const stopGnippips_1 = __importDefault(require("./stopGnippips"));
function stopGninnipSRequestHandler({ sentence }) {
    if (!sentence) {
        return "";
    }
    return (0, stopGnippips_1.default)(sentence);
}
