class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount  = 0;
        let count = 0;
        for(let r=0;r<nums.length;r++){
            if(nums[r]==1){
                count++;
            }
            else{
                maxCount = Math.max(maxCount,count);
                count = 0;
            }
        }
        return Math.max(maxCount,count);
    }
}
