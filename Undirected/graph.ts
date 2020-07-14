import {Bag} from "./Bag"; // linked list

class Graph {
    public V: number;       // number of vertices
    readonly adj: Bag[] = [];    // array of vertices

    constructor() {
        this.V = 0;
    }

    addVertex() {
        const bag = new Bag(this.V++);
        this.adj.push(bag);
        return bag;
    }

    addEdge(v: Bag, w: Bag): void {
        this.adj[v.v].add(w);
        this.adj[w.v].add(v);
    }

    getLength() {
        return this.V;
    }

    getAdj(v: number) {
        // Iterator
    }
}
const a = new Graph();
const v1 = a.addVertex()
const v2 = a.addVertex()
const v3 = a.addVertex()
const v4 = a.addVertex()

a.addEdge(v1, v2)
a.addEdge(v1, v3)
a.addEdge(v1, v4)
console.log(a)
console.log(v1)
console.log(v1.getAdjVertices())