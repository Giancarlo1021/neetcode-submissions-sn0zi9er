class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [] // [tempVal, tempIdx]
        let res = Array(temperatures.length).fill(0)

        for (let i = 0; i < temperatures.length; i++) {
            let t = temperatures[i]
            while (stack.length && t > stack[stack.length-1][0]) {
                let [tempVal, tempIdx] = stack.pop()
                console.log(t,i,tempIdx,tempVal)
                res[tempIdx] = i - tempIdx
            }
            stack.push([t,i])
        }
        return res
    }
}
