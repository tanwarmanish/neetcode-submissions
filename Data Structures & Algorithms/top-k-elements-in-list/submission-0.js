class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const f = new Map();
        nums.forEach(num=>{
            const value = f.get(num) || 0;
            f.set(num,value+1);
        });
        const r = [...f.entries()]
        r.sort((a,b)=>b[1]-a[1]);
        return r.map(v=>v[0]).slice(0,k);
    }
}
