class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for (let t of tokens) {
            if (t === "+") {
                console.log(t, stack)
                stack.push(Number(stack.pop()) + Number(stack.pop()))
            } 
            else if (t === "-") {
                let [a, b] = [stack.pop(), stack.pop()]
                console.log(t, a, b, stack)
                stack.push(Number(b) - Number(a))
            }
            else if (t === "*") {
                console.log(t, stack)
                stack.push(Number(stack.pop()) * Number(stack.pop()))
            }
            else if (t === "/") {
                let [a, b] = [stack.pop(), stack.pop()]
                console.log(t, a, b, stack)
                stack.push(Math.trunc(Number(b)/Number(a)))
            } else {
                console.log(t, stack)
                stack.push(t)
            }
        }
        return stack.pop()
    }
}
