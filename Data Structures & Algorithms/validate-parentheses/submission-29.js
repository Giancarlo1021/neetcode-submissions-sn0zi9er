class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let openToClose = {
            ")":"(",
            "]":"[",
            "}":"{"
        }
        let stack = []

        for (let c of s) {
            if (openToClose[c]){
                if (stack.length && 
                openToClose[c] === stack[stack.length-1]) {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(c)
            }
        }
        return stack.length === 0
    }
}
