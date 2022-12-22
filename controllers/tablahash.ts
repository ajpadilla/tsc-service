import {Request, Response} from "express";

import {TablaHash} from "../models/tablaHash";
import {TextRepetition} from "../models/textrepetition"
import {Stack} from '../models/stack'
import {Queue} from "../models/queue";

export const getTablaHash = async (req: Request, res: Response) => {
    const ht = new TablaHash();

    ht.set("France", 111);
    ht.set("Spain", 150);
    ht.set("ǻ", 192);

    console.log(`Un item ${ht.get("Spain")}`)

    ht.showItems();

    ht.remove("France");

    ht.showItems();
}

export const gethastTexto = async (req: Request, res: Response) => {
    const text = "hola que tal, tal que bienvenidos a BettaTech. Si os está gustando este vídeo, suscribiros y darle a la campanita para ver los nuevos vídeos que vaya subiendo";

    const textRepetition = new TextRepetition();
    console.log(textRepetition.wordRepetition(text));
}

export const getStack = async (req: Request, res: Response) => {

    const stack = new Stack();

    stack.push("Alvaro Padilla");
    stack.push("Jose Bustamante");
    stack.push("Eduardo Frechon");

    stack.print();
    console.log(stack.size())
    console.log(stack.peek())

    stack.pop();

    stack.print();
    console.log(stack.size())
    console.log(stack.peek())

}

export const getQueue = async (req: Request, res: Response) => {
    const queue = new Queue();

    queue.add("Alvaro Padilla");
    queue.add("Alberto Noguera");
    queue.add("Luis Alcantara");
    queue.add("Pedro Pascal");

    console.log("tamaño", queue.size());
    queue.print();

    queue.remove();

    console.log("tamaño", queue.size());
    queue.print();

}