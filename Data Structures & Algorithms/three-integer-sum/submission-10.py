class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # Sort the input array and keep track of the vals you already evaluated
            # in order to prevent from adding duplicate solutions
        # once we have a num that a num we have not evaluated before, we can then do a two sum 2 solution

        nums.sort()
        res = []
        for i, a in enumerate(nums):
            if a > 0:
                break

            if i > 0 and a == nums[i - 1]:
                continue

            l,r = i+1, len(nums)-1

            while l < r:
                currSum = a + nums[l] + nums[r]

                if currSum < 0:
                    l+=1
                elif currSum > 0:
                    r-=1
                else:
                    res.append([a,nums[l], nums[r]])
                    l+=1
                    r-=1
                    while nums[l] == nums[l-1] and l < r:
                        l+=1
        
        return res
