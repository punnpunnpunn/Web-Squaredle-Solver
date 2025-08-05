import Squaredle from "./DataStructures/Squaredle";
import Tree from "./DataStructures/Tree";
import Vertex from "./DataStructures/Vertex"; // Assuming you have a Vertex class

function findWords(graph: Squaredle, wordTree: Tree): Set<string> {
    const wordbank: string[] = [];
    const vertices = Object.values(graph.getVertices());
    for (const letter of vertices) {
        if (
            letter.getValue() !== "#" &&
            !(letter.getValue() in wordTree.getSubtrees())
        ) {
            throw new Error("Invalid starting letter");
        } else if (letter.getValue() !== "#") {
            const subtree = wordTree.getSubtrees()[letter.getValue()];
            if (subtree) {
                wordbank.push(
                    ...findWordsWithStart(
                        letter.getValue(),
                        letter,
                        graph,
                        subtree,
                        [letter]
                    )
                );
            }
        }
    }
    return new Set(wordbank);
}

function findWordsWithStart(
    str: string,
    letter: Vertex,
    graph: Squaredle,
    wordTree: Tree,
    usedLetters: Vertex[]
): string[] {
    let wordlist: string[] = [];
    if ("END" in wordTree.getSubtrees()) {
        wordlist = [str];
    }
    for (const l of letter.getNeighbours()) {
        if (
            !usedLetters.includes(l) &&
            l.getValue() in wordTree.getSubtrees()
        ) {
            const nextSubtree = wordTree.getSubtrees()[l.getValue()];
            if (nextSubtree) {
                wordlist.push(
                    ...findWordsWithStart(
                        str + l.getValue(),
                        l,
                        graph,
                        nextSubtree,
                        [...usedLetters, l]
                    )
                );
            }
        }
    }
    return wordlist;
}

export { findWords };