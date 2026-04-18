class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [] // [temperatures Value, temperatures Index]
        let res = Array(temperatures.length).fill(0)

        for (let i = 0; i < temperatures.length; i++) {
            let temp = temperatures[i]

            while (stack.length && temp > stack[stack.length-1][0]) {
                let [tempVal, tempIdx] = stack.pop()
                res[tempIdx] = i - tempIdx
            }
            stack.push([temp, i])
        }
        return res
    }
}
