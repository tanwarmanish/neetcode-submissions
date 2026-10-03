class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if(!nums.length) return [];
        let zeros = 0;
        let p = [nums[0]];
        let s = [nums[nums.length-1]];
        p[0]==0 && zeros++
        s[0]==0 && zeros++;
        if(zeros>1) return new Array(nums.length).fill(0);
        for(let i=1;i<nums.length;i++){
            let j = nums.length-i-1;
            p.push(p[i-1]*nums[i]);
            s.unshift(s[0]*nums[j]);
        }
        return nums.map((v,i)=>{
            let l = i==0?1:p[i-1];
            let r = i==nums.length-1?1:s[i+1];
            return l*r;
        });
        
    }
}
