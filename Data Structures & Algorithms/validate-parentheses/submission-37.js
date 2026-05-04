class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpen = {
            "}":"{",
            "]":"[",
            ")":"(",
        };

        for (let c of s) {
            console.log(closeToOpen[c]);
            if (closeToOpen[c]) {
                if (stack.length && stack[stack.length-1] === closeToOpen[c]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        return stack.length <= 0;
    }
}
