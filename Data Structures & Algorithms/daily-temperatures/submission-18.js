class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const temp = [] // [[tVal,tIdx]]
        let res = Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];

            while (temp.length && temp[temp.length-1][0] < t) {
                const [tVal, tIdx] = temp.pop();
                res[tIdx] = i - tIdx;
            }
            temp.push([t,i]);
        }
        return res;
    }
}
