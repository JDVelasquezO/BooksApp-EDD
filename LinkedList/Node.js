"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(value) {
        // @ts-ignore
        this.next = null;
        this.value = value;
    }
}
exports.Node = Node;
