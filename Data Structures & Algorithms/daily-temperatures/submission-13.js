class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [[]]
        let res = Array.from({length: temperatures.length}, () => 0) 

        for (let i = 0; i < temperatures.length; i++) {
            let t = temperatures[i]
            while (stack.length && t > stack[stack.length-1][1]) {
                const [tIdx, tVal] = stack.pop()
                res[tIdx] = i - tIdx
            }
            stack.push([i,t])
        }
        return res
    }
}