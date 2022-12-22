"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor() {
        this.stack = {};
        this.count = 0;
    }
    push(element) {
        this.stack[this.count] = element;
        this.count++;
        return this.stack;
    }
    pop() {
        this.count--;
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }
    peek() {
        return this.stack[this.size() - 1];
    }
    size() {
        return this.count;
    }
    print() {
        console.log(this.stack);
    }
}
exports.Stack = Stack;
//# sourceMappingURL=stack.js.map