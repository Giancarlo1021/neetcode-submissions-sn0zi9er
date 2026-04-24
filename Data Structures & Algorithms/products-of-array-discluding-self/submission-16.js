class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      let res = Array.from({length: nums.length}, () => 1);

      for (let i = 1; i < nums.length; i++) {
        res[i] = nums[i-1] * res[i-1]
      }

      let postfix = 1;
      let i = nums.length-1;
      while (i >= 0) {
        res[i]*=postfix;
        postfix*=nums[i]
        i--;
      }

      return res;
    }
}
