class Node {
    constructor(key=null,val=null,next=null,prev=null){
            this.key = key;
            this.val = val;
            this.next = next;
            this.prev = prev;
        }
    
    reset(){
        this.next = null;
        this.previous = null;
    }
}

class Queue1 {
        
        constructor(size){
            this.cache = new Map();
            this.size = size;
            this.head = new Node();
            this.tail = new Node();
            this.head.next = this.tail;
            this.tail.prev = this.head;
        }

        get(key){
            if(this.cache.has(key)){
                const node =  this.cache.get(key);
                this.update(key,node.val);
                return node.val;
            }
            return -1;
        }

        remove(node){
            let previousNode = node.prev;
            let nextNode = node.next;
            previousNode.next = nextNode;
            nextNode.prev = previousNode;
            node.reset();
            return node;
        }

        addToLast(node){
            let lastNode = this.tail.prev;
            lastNode.next = node;
            node.prev = lastNode;
            node.next = this.tail;
            this.tail.prev = node;
        }

        update(key,value){
            if(this.cache.has(key)){
                // exists
                const node = this.remove(this.cache.get(key));
                node.val = value;
                this.addToLast(node);
            }
            else{
                // next node
                if(this.cache.size>=this.size){
                    // remove oldest
                    const node = this.remove(this.head.next);
                    this.cache.delete(node.key);
                }
                if(this.cache.size>=this.size) return;
                const node = new Node(key,value);
                this.addToLast(node);
                this.cache.set(key,node);
            }
        }
}

class LRUCache {
    

    

    constructor(capacity) {
        this.q = new Queue1(capacity);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        return this.q.get(key);
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.q.update(key,value);
    }
}
