class Queue {

   private elements:string[];

   constructor() {
       this.elements = [];
   }

   add(element:string):void {
       this.elements.splice(0, 0, element);
   }

   remove():string | undefined{
       return this.elements.pop();
   }

   isempty():boolean {
       return this.elements.length === 0;
   }

   empty():void {
       this.elements.length = 0;
   }

   size():number {
       return this.elements.length;
   }

   print():void {
        console.log(this.elements);
   }
}

export {Queue};