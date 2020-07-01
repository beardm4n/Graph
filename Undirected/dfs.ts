import { Graph } from "./graph";

const G = new Graph(4);

// for (let i = 0; i < G.getV().length; i++) {
//     const R = Math.floor(Math.random() * G.getV().length)
//     G.addEdge(i, R);
// }

G.addEdge(0, 1);
G.addEdge(0, 2);
G.addEdge(1, 3);

console.log(G.getV())

// Depth-First Search API
export class DepthFirstSearch {
    readonly marked: boolean[] = [];    // array of traversed vertices
    readonly pathTo: number[] = [];     // array of edges between current vertex and previous vertex
    readonly s: number;                 // vertex of the path's begin

    constructor(G: Graph, s: number) {
        this.s = s;

        for (let i = 0; i < G.getV().length; i++) {
            this.marked[i] = false;
        }

        this.dfs(G, this.s);
    }

    dfs(G: Graph, v: number) {
        this.marked[v] = true;

        for (const w of G.getAdj(v)) {
            console.log(`${w} - ${this.marked[w]}`)
            if (!this.marked[w]) {
                this.pathTo[w] = v;
                this.dfs(G, w);
            }
        }
    }

    // check the path on current vertex
    hasPathTo(v: number) {
        return this.marked[v];
    }

    getPath(v: number) {
        if (!this.hasPathTo(v)) return null;

        const PATH: number[] = [];

        for (let x = v; x != this.s; x = this.pathTo[x]) {
            PATH.push(x);
        }

        PATH.push(this.s);

        return PATH
    }
}

const d = new DepthFirstSearch(G, 0);
console.log('PATH', d.getPath(3))