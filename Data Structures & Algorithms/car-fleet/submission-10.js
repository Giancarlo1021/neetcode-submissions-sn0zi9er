class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pairs = position.map((pos, i) => [pos, speed[i]]);
        pairs.sort((a,b) => b[0] - a[0]);
        let res = 1;
        let old = (target-pairs[0][0]) / pairs[0][1];

        for (let i = 0; i < position.length; i++) {
            let curr = (target-pairs[i][0]) / pairs[i][1];

            if (curr > old) {
                old = curr;
                res++
            }
        }
        return res;
    }
}