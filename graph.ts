// adjacency list vertices of graph
class Bag {
    readonly vertices: number[] = [];
    readonly vertex: number;

    constructor(v: number) {
        this.vertex = v;
    }

    add(v: number) {
        this.vertices.push(v);
    }
}

class Graph {
    // number of vertices
    readonly V: number;
    // vertex-indexed array of lists.
    readonly adj: Bag[] = [];

    constructor(V: number) {
        this.V = V;
        for (let i = 0; i < this.V; i++) {
            this.adj[i] = new Bag(i);
        }
    }

    addEdge(v: number, w: number) {
        this.adj[v].add(w);
        this.adj[w].add(v);
    }

    getV() {
        return this.adj;
    }

    getAdj(v: number) {
        return this.adj[v].vertices
    }
}