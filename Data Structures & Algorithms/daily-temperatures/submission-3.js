class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = Array.from({length: temperatures.length}, () => 0)
        let stack = []

        for (let i = 0; i < temperatures.length; i++) {
            let temp = temperatures[i]
            console.log(temp,stack, stack[stack.length-1])
            while (stack.length && temp > stack[stack.length-1][0]) {
                let [tVal, tIdx] = stack.pop()
                res[tIdx] = i - tIdx
                console.log("in while loop")
            }
            stack.push([temp,i])
        }
        return res
    }
}
