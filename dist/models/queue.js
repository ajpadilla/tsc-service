"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor() {
        this.elements = [];
    }
    add(element) {
        this.elements.splice(0, 0, element);
    }
    remove() {
        return this.elements.pop();
    }
    isempty() {
        return this.elements.length === 0;
    }
    empty() {
        this.elements.length = 0;
    }
    size() {
        return this.elements.length;
    }
    print() {
        console.log(this.elements);
    }
}
exports.Queue = Queue;
//# sourceMappingURL=queue.js.map