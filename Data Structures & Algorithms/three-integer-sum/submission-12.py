class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []

        #First we need to sort the array
        nums.sort()

        for i,a in enumerate(nums):
            # The reason we are breaking out of this array is because...
            #... there is no way to numbers greater than 0 can evaluate to 0
            if a > 0:
                break
            
            # Here we are making sure that we dont evaluate the same number twice... 
            #...this would prevent duplicates in our answer
            if i > 0 and a == nums[i-1]:
                continue

            l, r = i+1, len(nums)-1

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

                    while l < r and nums[l] == nums[l-1]:
                        l+=1
        
        return res