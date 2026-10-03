class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i=0;i<nums.length;i++){
            const t = target - nums[i];
            for(let j=i+1;j<nums.length;j++){
                if(nums[j]==t) return [i,j];
            }
        }
    }
}
