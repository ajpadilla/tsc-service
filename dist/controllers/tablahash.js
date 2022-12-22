"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueue = exports.getStack = exports.gethastTexto = exports.getTablaHash = void 0;
const tablaHash_1 = require("../models/tablaHash");
const textrepetition_1 = require("../models/textrepetition");
const stack_1 = require("../models/stack");
const queue_1 = require("../models/queue");
const getTablaHash = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ht = new tablaHash_1.TablaHash();
    ht.set("France", 111);
    ht.set("Spain", 150);
    ht.set("ǻ", 192);
    console.log(`Un item ${ht.get("Spain")}`);
    ht.showItems();
    ht.remove("France");
    ht.showItems();
});
exports.getTablaHash = getTablaHash;
const gethastTexto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const text = "hola que tal, tal que bienvenidos a BettaTech. Si os está gustando este vídeo, suscribiros y darle a la campanita para ver los nuevos vídeos que vaya subiendo";
    const textRepetition = new textrepetition_1.TextRepetition();
    console.log(textRepetition.wordRepetition(text));
});
exports.gethastTexto = gethastTexto;
const getStack = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const stack = new stack_1.Stack();
    stack.push("Alvaro Padilla");
    stack.push("Jose Bustamante");
    stack.push("Eduardo Frechon");
    stack.print();
    console.log(stack.size());
    console.log(stack.peek());
    stack.pop();
    stack.print();
    console.log(stack.size());
    console.log(stack.peek());
});
exports.getStack = getStack;
const getQueue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queue = new queue_1.Queue();
    queue.add("Alvaro Padilla");
    queue.add("Alberto Noguera");
    queue.add("Luis Alcantara");
    queue.add("Pedro Pascal");
    console.log("tamaño", queue.size());
    queue.print();
    queue.remove();
    console.log("tamaño", queue.size());
    queue.print();
});
exports.getQueue = getQueue;
//# sourceMappingURL=tablahash.js.map