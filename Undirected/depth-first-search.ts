import { Graph } from "./graph";
import { Bag } from "./Bag";

// Depth-First Search API
export class DepthFirstSearch {
    readonly marked: boolean[] = [];    // array of traversed vertices
    readonly pathTo: Bag[] = [];     // array of edges between current vertex and previous vertex
    readonly s: Bag;                 // vertex of the path's begin

    constructor(G: Graph, s: Bag) {
        this.s = s;

        for (let i = 0; i < G.getLength(); i++) {
            this.marked[i] = false;
        }

        this.dfs(G, this.s);
    }

    dfs(G: Graph, v: Bag): void {
        this.marked[v.v] = true;

        for (const w of G.getAdj(v.v)) {
            if (!this.marked[w.item.v]) {
                this.pathTo[w.item.v] = v;
                this.dfs(G, w.item);
            }
        }
    }

    // check the path on current vertex
    hasPathTo(v: number): boolean {
        return this.marked[v];
    }

    getPath(v: Bag): Bag[] {
        if (!this.hasPathTo(v.v)) return null;

        const PATH: Bag[] = [];

        for (let x = v; x != this.s; x = this.pathTo[x.v]) {
            PATH.push(x);
        }

        PATH.push(this.s);

        return PATH
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
a.addEdge(v2, v4)
a.addEdge(v3, v4)
console.log(a)
const b = new DepthFirstSearch(a,v1);
console.log(b)
console.log(b.getPath(v3))