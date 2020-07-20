// Node of Linked list
class NodeElement {
    public item: BagAdt;
    public previously: NodeElement;
}

export class BagAdt {
    readonly v: number;         // number of Graph's index array
    public first: NodeElement;
    private n: number;          // number of adjacency vertices

    constructor(v: number) {
        this.v = v;
        this.first = null;
        this.n = 0;
    }

    add(item: BagAdt): void {
        const tempNode = this.first;
        this.first = new NodeElement();
        this.first.item = item;
        this.first.previously = tempNode;
        this.n++;
    }

    public *[Symbol.iterator](): IterableIterator<any> {
        while (this.first != null) {
            yield this.first.previously;
        }
    }
}