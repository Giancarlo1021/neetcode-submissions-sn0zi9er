class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const temps = []; // 2d array = [[tval, tidx]]
        let res = Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            let t = temperatures[i];
            while (temps.length && temps[temps.length-1][0] < t) {
                const [tVal, tIdx] = temps.pop();
                res[tIdx] = i - tIdx;
            }
            temps.push([t,i]);
        }
        return res;
    }
}
