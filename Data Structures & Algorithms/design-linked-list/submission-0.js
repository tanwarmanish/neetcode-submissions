class Node {
    constructor(val = null, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyLinkedList {
    constructor() {
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }

    /**
     * Helper to retrieve the actual Node at index (0-indexed).
     * Returns null if index is out of bounds.
     * @param {number} index
     * @return {Node|null}
     */
    _getNode(index) {
        if (index < 0 || index >= this.size) return null;

        let curr;
        // Optimize traversal from head or tail depending on index proximity
        if (index < this.size / 2) {
            curr = this.head.next;
            for (let i = 0; i < index; i++) {
                curr = curr.next;
            }
        } else {
            curr = this.tail.prev;
            for (let i = 0; i < this.size - 1 - index; i++) {
                curr = curr.prev;
            }
        }
        return curr;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        const node = this._getNode(index);
        return node ? node.val : -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.addAtIndex(0, val);
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        this.addAtIndex(this.size, val);
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0 || index > this.size) return;

        // Find the node currently at index, or this.tail if appending at the end
        const succ = (index === this.size) ? this.tail : this._getNode(index);
        const pred = succ.prev;

        const newNode = new Node(val, succ, pred);
        pred.next = newNode;
        succ.prev = newNode;

        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        const node = this._getNode(index);
        if (!node) return;

        const pred = node.prev;
        const succ = node.next;

        pred.next = succ;
        succ.prev = pred;

        this.size--;
    }
}