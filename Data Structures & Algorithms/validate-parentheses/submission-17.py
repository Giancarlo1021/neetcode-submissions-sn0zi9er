class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        m = {
            ")":"(", 
            "]":"[", 
            "}":"{" 
            }
        
        for n in s:
            if n in m:
                if len(stack) > 0 and stack[-1] == m[n]: 
                    stack.pop()
                else:
                    return False
            else:
                stack.append(n)

        return len(stack) == 0