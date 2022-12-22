"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextRepetition = void 0;
class TextRepetition {
    constructor() {
    }
    wordRepetition(text) {
        let dict = {};
        let separatedWords = text.split(" ");
        for (let word of separatedWords) {
            if (this.normalize(word) in dict) {
                ++dict[this.normalize(word)];
            }
            else {
                dict[this.normalize(word)] = 1;
            }
        }
        return dict;
    }
    normalize(word) {
        return word.toLocaleLowerCase().replace(/[.!,]/g, "");
    }
}
exports.TextRepetition = TextRepetition;
//# sourceMappingURL=textrepetition.js.map