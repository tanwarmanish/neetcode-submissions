class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i = -1;
        let count = 0;
        for(let j=0;j<nums.length;j++){
            if(nums[j]!=val){
                count++;
                i++;
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
        return count;
    }
}
