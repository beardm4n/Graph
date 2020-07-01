"use strict";
exports.__esModule = true;
exports.Graph = exports.Bag = void 0;
// adjacency list vertices of graph
var Bag = /** @class */ (function () {
    function Bag(v) {
        this.vertices = [];
        this.vertex = v;
    }
    Bag.prototype.add = function (v) {
        this.vertices.push(v);
    };
    return Bag;
}());
exports.Bag = Bag;
var Graph = /** @class */ (function () {
    function Graph(V) {
        // vertex-indexed array of lists.
        this.adj = [];
        this.V = V;
        for (var i = 0; i < this.V; i++) {
            this.adj[i] = new Bag(i);
        }
    }
    Graph.prototype.addEdge = function (v, w) {
        this.adj[v].add(w);
        this.adj[w].add(v);
    };
    Graph.prototype.getV = function () {
        return this.adj;
    };
    Graph.prototype.getAdj = function (v) {
        return this.adj[v].vertices;
    };
    return Graph;
}());
exports.Graph = Graph;
