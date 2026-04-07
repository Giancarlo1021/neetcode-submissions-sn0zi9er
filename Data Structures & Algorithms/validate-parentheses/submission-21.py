class Solution:
    def isValid(self, s: str) -> bool:
        openToClose = {
            ")" : "(",
            "}" : "{",
            "]" : "[",
        }
        stack = []

        for i in s:
            if openToClose.get(i):
                if len(stack) > 0 and stack[-1] == openToClose[i]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(i)
            
        return len(stack) == 0 
