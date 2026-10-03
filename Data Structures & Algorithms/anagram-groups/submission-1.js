class Solution {
    constructor(){
        this.counts = new Uint16Array(26);
    }

    hash(str){
        this.counts.fill(0);
        let f = {};
        for(let i=0;i<str.length;i++){
            this.counts[str.charCodeAt(i)-97]++;
        }
        return String.fromCharCode.apply(null,this.counts);
    }

    groupAnagrams(strs) {
        let f = new Map();
        for(let str of strs){
            let key = this.hash(str);
            let group = f.get(key);
            if(group){
                group.push(str);
            }
            else{
                f.set(key,[str]);
            }
        }
        return Array.from(f.values());
    }
}
