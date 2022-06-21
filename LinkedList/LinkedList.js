"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Node_1 = require("./Node");
class LinkedList {
    constructor() {
        // @ts-ignore
        this.start = null;
        this.length = 0;
    }
    isEmpty() {
        return this.start == null;
    }
    getLength() {
        return this.length;
    }
    addFinish(value) {
        let node = new Node_1.Node(value);
        if (this.isEmpty()) {
            this.start = node;
        }
        else {
            let pointer = this.start;
            while (pointer.next != null) {
                pointer = pointer.next;
            }
            pointer.next = node;
        }
        this.length += 1;
    }
    getValues() {
        let pointer = this.start;
        while (pointer != null) {
            console.log(pointer.value.name);
            pointer = pointer.next;
        }
    }
    getValue(n) {
        if (this.isEmpty()) {
            // @ts-ignore
            return null;
        }
        else {
            let pointer = this.start;
            let counter = 0;
            while (counter < n && pointer.next != null) {
                pointer = pointer.next;
                counter += 1;
            }
            if (counter != n) {
                // @ts-ignore
                return null;
            }
            else {
                return pointer.value;
            }
        }
    }
    setValue(n, newValue) {
        let pointer = this.start;
        let counter = 0;
        while (counter < n && pointer.next != null) {
            pointer = pointer.next;
            counter += 1;
        }
        pointer.value = newValue;
    }
}
exports.LinkedList = LinkedList;
