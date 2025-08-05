class Vertex {
    private value: string;
    private neighbours: Set<Vertex>;

    constructor(value: string) {
        this.value = value;
        this.neighbours = new Set();
    }
    getValue() {
        /** Returns the value of this vertex */
        return this.value;
    }

    getNeighbours() {
        /** Returns the neighbours of this vertex */
        return Array.from(this.neighbours);
    }

    addEdge(vertex: Vertex) {
        /** Adds an edge between self and vertex */
        if (this.neighbours.has(vertex)) {
            return;
        }
        this.neighbours.add(vertex);
        vertex.neighbours.add(this);
    }

    toString() {
        return this.value;
    }
}

export default Vertex;