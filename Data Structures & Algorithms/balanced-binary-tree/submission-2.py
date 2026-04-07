# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:

        ## recursive function
        def dfs(root):
            # if we hit the end of the root, we return a list with True and 0
                # True because a child (no leafs) is balanced
                # 0 because we hit the end
            if not root:
                return [True, 0]
            
            # we are assigning the variables left and right with the traversals of left and right
            left, right = dfs(root.left), dfs(root.right)

            # We want to return both booleans of left and right as well as the depth from each traversal
                # evaluate booleans 
                # subtract depths from each traversal and make sure it is less than or equal to 1 
                    # this ensures we hit a balanced tree
            balanced = left[0] and right[0] and abs(left[1] - right[1]) <= 1

            # return the list
            return [balanced, 1 + max(left[1], right[1])]
        
        # all we need to return here is the boolean from our traversals 
        return dfs(root)[0]

        