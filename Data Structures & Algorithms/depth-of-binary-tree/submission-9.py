# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root: return 0
        q = deque([(root, 1)])
        longest = 1
        while q:
            node, length = q.popleft()
            longest = max(length, longest)
            if node.left:
                q.append([node.left, length+1])

            if node.right:
                q.append([node.right, length+1])

        return longest