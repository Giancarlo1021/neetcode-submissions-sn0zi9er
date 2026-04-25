class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
      let stack = [] // value, index
      let res = Array.from({length: temperatures.length}, () => 0);

      for (let i = 0; i < temperatures.length; i++) {
        let t = temperatures[i];
        while (stack.length && stack[stack.length-1][0] < t) {
            let [tVal, tIdx] = stack.pop();
            res[tIdx] = i - tIdx;
        }
        stack.push([t,i]);
      }
      return res;
    }
}
