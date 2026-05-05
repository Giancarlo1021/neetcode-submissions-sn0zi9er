class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for (const s of strs) {
            encoded+= s.length + "#" + s;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];
        let i = 0;
        while (i < str.length) {
            let j = i;

            while (str[j] != "#") {
                j+=1
            };

            const len = Number(str.substring(i,j));
            i = j + 1;
            j = i + len;

            decoded.push(str.substring(i,j));
            i = j;
        }
        return decoded;
    }
}
