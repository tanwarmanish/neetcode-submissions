class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];

        // sort
        nums = nums.sort((a,b)=>a-b);

        for(let i=0;i<nums.length;i++){
            if(nums[i]>0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i+1;
            let r = nums.length - 1;
            while(l<r){
                const t = nums[i]+nums[l]+nums[r];
                if(t==0){
                    result.push([nums[i],nums[l],nums[r]]);
                    while (l < r && nums[l] === nums[l + 1]) l++;
                    while (l < r && nums[r] === nums[r - 1]) r--;
                    l++;
                    r--;
                }
                else if(t>0){
                    r--;
                }
                else{
                    l++;
                }
            }
        }

        return result;
    }
}
