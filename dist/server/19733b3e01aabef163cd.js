"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Worker_fn() {
    return new Worker(__webpack_public_path__ + "server.worker.js");
}
exports.default = Worker_fn;
