class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0, r = numbers.length-1;
        while (l < r) {
            let curSum = numbers[l] + numbers[r];
            if (curSum < target) {
                l++;
            } else if (curSum > target) {
                r--;
            } else {
                return [l+1,r+1];
            }
        }
    }
}
