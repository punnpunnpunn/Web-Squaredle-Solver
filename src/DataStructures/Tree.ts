class Tree {
    private root: string;
    private subtrees: { [key: string]: Tree | null };
    constructor(value: string) {
        this.root = value;
        this.subtrees = {};
    }

    getRoot() {
        /** Returns the root of the tree */
        return this.root;
    }

    getSubtrees() {
        /** Returns subtrees */
        return this.subtrees;
    }

    addString(word: string) {
        /** Adds a subtree to this Tree in the same manner is in ex2 (see report for more info) */
        if (word === '') {
            this.subtrees["END"] = null;
        } else if (!(word[0] in this.subtrees)) {
            this.subtrees[word[0]] = new Tree(word[0]);
            if (this.subtrees[word[0]] !== null) {
                this.subtrees[word[0]]!.addString(word.slice(1));
            }
        } else {
            if (this.subtrees[word[0]] !== null) {
                this.subtrees[word[0]]!.addString(word.slice(1));
            }
        }
    }
}

export default Tree;