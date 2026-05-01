class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const temps = []; // 2d array = [tVal, tIdx]
        let res = Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];
            while (temps.length && temps[temps.length-1][0] < t) {
                console.log(temps, t)
                const [tVal, tIdx] = temps.pop();
                res[tIdx] = i - tIdx;
                console.log(tVal, i, tIdx, "\n");
            }
            temps.push([t,i]);
        }
        return res;
    }
}