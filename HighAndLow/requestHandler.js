"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = highAndLowRequestHandler;
const highAndLow_1 = require("./highAndLow");
function highAndLowRequestHandler({ numbers }) {
    if (!numbers) {
        return "";
    }
    return highAndLow_1.highAndLow.process(numbers);
}
