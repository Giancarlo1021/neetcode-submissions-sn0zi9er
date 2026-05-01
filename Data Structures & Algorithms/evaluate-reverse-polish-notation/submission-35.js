class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let res = [];

        for (let t of tokens) {
            if (t === "+") {
                res.push(res.pop() + res.pop());
            } else if (t === "-") {
                let a = res.pop(), b = res.pop();
                res.push(b-a)
            } else if (t === "*") {
                res.push(res.pop() * res.pop());
            } else if (t === "/") {
                let a = res.pop(), b = res.pop();
                res.push(Math.trunc(b/a));
            } else {
                res.push(Number(t));
            }
        }
        return res.pop();
    }
}
