class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        console.log('push')
        this.stack.push(val);

        val = Math.min(val, this.minStack.length ?
        this.minStack[this.minStack.length-1] :
        val);
        this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        console.log('pop')
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        console.log('top')
        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        console.log('min')
        return this.minStack[this.minStack.length-1]
    }
}
