class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let carPairs = position.map((p,i) => [p, speed[i]])
        carPairs.sort((a, b) => b[0] - a[0])

        console.log(carPairs)

        let length = 1
        let prev = ((target - carPairs[0][0]) / carPairs[0][1])

        for (let i = 1; i < carPairs.length; i++) {
            let curr = ((target - carPairs[i][0]) / carPairs[i][1])

            if (curr > prev) {
                length++
                prev = curr
            }
        }
        return length
    }
}
