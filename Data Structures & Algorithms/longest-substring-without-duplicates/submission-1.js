class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let m = new Map();
        let l = 0;
        let r = 0;
        let maxLength = 0;
        while(r<s.length){
            maxLength = Math.max(maxLength,r-l);
            let ch = s[r];
            if(m.has(ch) && m.get(ch)>=l){
                l = m.get(ch) + 1;
            }
            else{
                m.set(ch,r);
                r++;
            }

        }
        maxLength = Math.max(maxLength,r-l);
        return maxLength;
    }
}
