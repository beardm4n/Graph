// Node of Linked list
class NodeElement {
    public item: Bag;
    public next: NodeElement;
}

export class Bag {
    readonly v: number;         // number of Graph's index array
    public first: NodeElement;
    private n: number;          // number of adjacency vertices

    constructor(v: number) {
        this.v = v;
        this.first = null;
        this.n = 0;
    }

    add(item: Bag): void {
        const tempNode = this.first;
        this.first = new NodeElement();
        this.first.item = item;
        this.first.next = tempNode;
        this.n++;
    }

    getAdjVertices() {
        const a: Bag[] = [];
        while (this.first != null) {
            const temp = this.first;
            a.push(this.first.item);
            this.first = this.first.next;
        }
        return a
    }
}