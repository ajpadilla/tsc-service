
class Stack {

    private stack:{[key:number]: string};
    private count:number;

    constructor() {
        this.stack = {};
        this.count = 0;
    }

    push(element:string):object {
        this.stack[this.count] = element;
        this.count++;
        return this.stack;
    }

    pop():string {
        this.count--;
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }

    peek():string {
        return this.stack[this.size() -1];
    }

    size():number {
        return this.count;
    }

    print():void {
        console.log(this.stack);
    }
}

export {Stack};