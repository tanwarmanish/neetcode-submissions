class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    hash(str){
        const az = 'abcdefghijklmnopqrstuvwxyz';
        let f = {};
        for(let char of str){
            f[char] = (f[char]|| 0) + 1;
        }
        let key = ''
        for(let char of az){
            if(f[char]){
                key += char + f[char];
            }
        }
        return key;
    }

    groupAnagrams(strs) {
        let f = {};
        for(let str of strs){
            let key = this.hash(str);
            if(!f[key]) f[key] = [];
            f[key].push(str);
        }
        return Object.values(f);
    }
}
