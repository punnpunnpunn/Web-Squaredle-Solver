import Vertex from "./Vertex";

class Squaredle {
    private vertices: { [key: string]: Vertex };
    private size: number;
    private letters: Set<string>;

    constructor(grid: string[][]) {
        this.vertices = {};
        this.size = grid.length;
        this.letters = new Set();
        const edgesToAdd: { [key: string]: Set<string> } = {};

        for (let y = 0; y < grid.length; y++) { // This converts a nested list into a Squaredle (a graph)
            for (let x = 0; x < grid[y].length; x++) {
                this.vertices[`${y},${x}`] = new Vertex(grid[y][x]);
                this.letters.add(grid[y][x]);
                edgesToAdd[`${y},${x}`] = new Set();

                if (x + 1 < grid[y].length) {
                    edgesToAdd[`${y},${x}`].add(`${y},${x + 1}`);
                    if (y + 1 < grid.length) {
                        edgesToAdd[`${y},${x}`].add(`${y + 1},${x + 1}`);
                    }
                    if (y - 1 >= 0) {
                        edgesToAdd[`${y},${x}`].add(`${y - 1},${x + 1}`);
                    }
                }
                if (x - 1 >= 0) {
                    edgesToAdd[`${y},${x}`].add(`${y},${x - 1}`);
                    if (y + 1 < grid.length) {
                        edgesToAdd[`${y},${x}`].add(`${y + 1},${x - 1}`);
                    }
                    if (y - 1 >= 0) {
                        edgesToAdd[`${y},${x}`].add(`${y - 1},${x - 1}`);
                    }
                }
                if (y + 1 < grid.length) {
                    edgesToAdd[`${y},${x}`].add(`${y + 1},${x}`);
                }
                if (y - 1 >= 0) {
                    edgesToAdd[`${y},${x}`].add(`${y - 1},${x}`);
                }
            }
        }

        for (const vertex in edgesToAdd) {
            for (const edge of edgesToAdd[vertex]) {
                this.vertices[vertex].addEdge(this.vertices[edge]);
            }
        }
    }

    toString() {
        const grid = [];
        for (let y = 0; y < this.size; y++) {
            const thisLine = [];
            for (let x = 0; x < this.size; x++) {
                thisLine.push(this.vertices[`${y},${x}`].getValue());
            }
            grid.push(thisLine.join(' '));
        }
        return grid.join('\n');
    }
    getVertices() {
        return this.vertices;
    }
    getSize() {
        return this.size;
    }
    getLetters() {
        return this.letters;
    }
}

export default Squaredle;