class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let m = new Map();
        for(let i=0;i<nums.length;i++){
            let j = m.get(target-nums[i]);
            if(j>=0 && i!=j){
                return [i,j];
            }
            m.set(nums[i],i);
        }
        return [];
    }
}
