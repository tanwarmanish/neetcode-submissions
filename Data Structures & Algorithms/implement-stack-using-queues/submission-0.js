class MyStack {
    constructor() {
        this.queue = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        let n = this.queue.length;
        while(n>0){
            const value = this.queue.shift();
            if(n==1) return value;
            this.queue.push(value);
            n--;
        }
        return null;
    }

    /**
     * @return {number}
     */
    top() {
        let n = this.queue.length;
        let value = null;
        while(n>0){
            value = this.queue.shift();
            this.queue.push(value);
            n--;
        }
        return value;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue.length==0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
