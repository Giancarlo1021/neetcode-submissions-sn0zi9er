class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      let encoded = "";
      for (let s of strs) {
        encoded += String(s.length) + "#" + s
      }
      return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
      let i = 0;
      let decoded = [];
      while (i < str.length) {
        let j = i
        while (str[j] !== "#") {
          j++;
        }
        const len = Number(str.slice(i,j));
        i = j + 1;
        j = i + len;

        decoded.push(str.slice(i,j));
        i = j;
      }
      return decoded;
    }
}
