class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = position.map((p,i) => [p, speed[i]])
        cars.sort((a, b) => b[0] - a[0])
        let length = 1
        let prev = ((target - cars[0][0]) / cars[0][1])
        for (let i = 0; i < cars.length; i ++) {
            let curr = ((target - cars[i][0]) / cars[i][1])

            if (curr > prev) {
                length++
                prev = curr
            }
        }
        return length
    }
}
