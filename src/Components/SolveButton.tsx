import { findWords } from "../findWord"
import Squaredle from "../DataStructures/Squaredle";
import Tree from "../DataStructures/Tree";
import dictionary from "../dictionary.txt";

const wordTree = new Tree("Start");
fetch(dictionary)
.then(response => response.text())
.then(data => {
    for (const word of data.split("\n")) {
    if (word.trim().length >= 4) {
        wordTree.addString(word.trim());
    }
    }
});
var isAlpha = function(ch: string): boolean {
return /^[A-Z]$/i.test(ch);
}
const SolveButton = ({ GRID_SIZE }: { GRID_SIZE: number }) => {
  return (
    <button className="block mx-auto mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => {
        const grid: string[][] = [];
        for (let i = 0; i < GRID_SIZE; i++) {
            const row: string[] = [];
            for (let j = 0; j < GRID_SIZE; j++) {
            const cell = document.getElementById(`cell-${i * GRID_SIZE + j}`) as HTMLInputElement;
            if (isAlpha(cell.value)) {
                row.push(cell.value.toUpperCase());
            }
            else {
                row.push("#");
            }
            }
            grid.push(row);
        }
        const graph = new Squaredle(grid);
        const foundWords = findWords(graph, wordTree);
        alert("Found words: " + Array.from(foundWords).join(", "));
        }}>
        Solve
    </button>
  )
}

export default SolveButton