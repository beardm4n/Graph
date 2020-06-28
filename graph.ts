// adjacency list vertices of graph
class Bag {
    vertices: number[] = [];

    add(v: number) {
        this.vertices.push(v);
    }
}

class Graph {
    // number of vertices
    readonly V: number;
    // array of indexes' vertices with list of adjacent vertices for each vertex of array
    readonly adj: Bag[] = [];

    constructor(V: number) {
        this.V = V;
        for (let i = 0; i < this.V; i++) {
            this.adj[i] = new Bag();
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