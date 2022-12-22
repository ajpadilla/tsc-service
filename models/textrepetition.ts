class TextRepetition {
    constructor() {
    }

    public wordRepetition(text: string):object {
        let dict: {[key:string]: number} = {};
        let separatedWords = text.split(" ");
        for ( let word of separatedWords) {
            if (this.normalize(word) in dict) {
                ++dict[this.normalize(word)];
            } else {
                dict[this.normalize(word)] = 1;
            }
        }
        return dict;
    }

    private normalize(word:string):string {
        return word.toLocaleLowerCase().replace(/[.!,]/g, "");
    }
}

export { TextRepetition };