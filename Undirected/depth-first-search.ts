import { Graph } from "./graph";

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

    dfs(G: Graph, v: number): void {
        this.marked[v] = true;

        for (const w of G.getAdj(v)) {
            if (!this.marked[w]) {
                this.pathTo[w] = v;
                this.dfs(G, w);
            }
        }
    }

    // check the path on current vertex
    hasPathTo(v: number): boolean {
        return this.marked[v];
    }

    getPath(v: number): number[] {
        if (!this.hasPathTo(v)) return null;

        const PATH: number[] = [];

        for (let x = v; x != this.s; x = this.pathTo[x]) {
            PATH.push(x);
        }

        PATH.push(this.s);

        return PATH
    }
}