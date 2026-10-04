class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        
        // If stack was empty, val is the new min; otherwise compare with current min
        if (this.min.length === 0) {
            this.min.push(val);
        } else {
            const currentMin = this.min[this.min.length - 1];
            this.min.push(Math.min(currentMin, val));
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.min.pop();
        return this.stack.pop();
    } 

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1];
    }
}