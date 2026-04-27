class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pair = position.map((pos, i) => [pos, speed[i]]);
        pair.sort((a,b) => b[0]-a[0]);
        let res = 1;
        let old = (target - pair[0][0]) / pair[0][1];

        for (let i = 0; i < position.length; i++) {
            let curr = (target - pair[i][0]) / pair[i][1];

            if (curr > old) {
                res++
                old = curr;
            }
        }
        return res;
    }
}
