import * as path from "path";

class TablaHash {

    protected table:any[];
    protected size:number;

    constructor() {
        this.table = new Array(127);
        this.size = 0;
    }

    private hash(key:string) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        console.log(`Hash: ${hash} key: ${key}`)
        return hash % this.table.length;
    }

    public set(key:string, value:number) {
        const index = this.hash(key);

        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                // Actualizar el valor cuando encuentra la clave, para no aceptar valores repetidos
                if (this.table[index][i][0] === key) {
                    this.table[index][i][1] = value;
                    return;
                }
            }

            // Agrega nuevos valores al array
            this.table[index].push([key, value]);
        } else {
            this.table[index] = [];
            this.table[index].push([key, value]);
        }

        this.size++;
    }

    public get(key:string) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (let i = 0 ; i < this.table.length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }
        return undefined;
    }

    public remove(key:string) {
        const index = this.hash(key);
        if (this.table[index] && this.table[index].length) {
            for (let i = 0 ; i < this.table.length; i++) {
                if (this.table[index][i][0] === key) {
                    console.log("Entro", index);
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        } else {
            return false;
        }
    }

    public showItems() {
        this.table.forEach((values:any[], index:number) => {
            const valStrings = values.map((value:any, key:number) => `[ ${key}: ${value} ]`);
            console.log(`${index}: ${valStrings}`);
        });
    }
}

export { TablaHash };