// adjacency list vertices of graph
class Bag {
    vertices: number[] = [];

    add(v: number) {
        this.vertices.push(v);
    }

    iterator() {
        return this.vertices;
    }
}

class Graph {
    // number of vertices
    V: number;
    // array of indexes' vertices with list of adjacent vertices for each vertex of array
    adj: Bag[] = [];

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

    getAdj(v: number) {
        return this.adj[v].iterator();
    }
}