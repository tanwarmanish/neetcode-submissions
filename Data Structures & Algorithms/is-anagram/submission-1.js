class Solution {
    isAnagram(s, t) {
        const f = new Map();
        for(let char of s){
            f.set(char,f.get(char)?f.get(char)+1:1)
        }
        for(let char of t){
            f.set(char,f.get(char)?f.get(char)-1:-1);
        }
        return !f.entries().find(v=>v[1]!=0);
    }
}
