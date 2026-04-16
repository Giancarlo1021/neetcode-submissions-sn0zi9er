class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = Array.from({length: temperatures.length}, () => 0)
        const stack = []


        for (let i = 0; i < temperatures.length; i++) {
            // evaluating the day of the week that is i
            const t = temperatures[i]
            // While the stack is populated and...
            //... and the current day is hotter than the top of the stack  
            while (stack.length > 0 && t > stack[stack.length-1][0]) {
                // pop the day and index stored in the stack
                const[stackT, stackInd] = stack.pop()
                // append the current iteration of i minus the stack index to the resolution
                res[stackInd] = i - stackInd
            }
            // then we add the temperature and i (which represents the index) to the stack
            stack.push([t,i])
        }
        return res
    }
}
