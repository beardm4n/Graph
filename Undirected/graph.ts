// adjacency list vertices of graph
export class Bag {
    readonly vertices: number[] = [];
    readonly vertex: number;

    constructor(v: number) {
        this.vertex = v;
    }

    add(v: number): void {
        this.vertices.push(v);
    }
}

// Graph API
export class Graph {
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

    addEdge(v: number, w: number): void {
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