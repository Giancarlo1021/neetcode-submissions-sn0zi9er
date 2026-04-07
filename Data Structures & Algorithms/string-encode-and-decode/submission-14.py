class Solution:

    def encode(self, strs: List[str]) -> str:
        encode = []

        for s in strs:
            encode.append(str(len(s)) + "#" + s)
        
        return "".join(encode)

    def decode(self, s: str) -> List[str]:
        l = 0
        decode = []

        while (l < len(s)):
            r = l

            while s[r] != "#":
                r+=1
            
            length = int(s[l:r])
            l = r + 1
            r = l + length

            decode.append(s[l:r])
            l = r
        
        return decode