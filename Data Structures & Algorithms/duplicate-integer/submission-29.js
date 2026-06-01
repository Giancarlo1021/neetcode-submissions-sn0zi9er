class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mySet = new Set(nums);
        console.log(mySet.length, nums)
        return mySet.size != nums.length;
    }
}
