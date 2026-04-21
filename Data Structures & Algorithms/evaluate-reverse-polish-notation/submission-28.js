class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let s = []
        for (let t of tokens) {
            if (t === "+") {
                s.push(s.pop() + s.pop())
            } else if (t === "-") {
                let a = s.pop()
                let b = s.pop()
                s.push(b-a)
            } else if (t === "*") {
                s.push(s.pop() * s.pop())
            } else if (t === "/") {
                let a = s.pop()
                let b = s.pop()
                s.push(Math.trunc(b/a))
            } else {
                s.push(Number(t))
            }
        }
        return s.pop()
    }
}
