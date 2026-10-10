class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = nums[0];
        let fast = nums[0];

        // Phase 1: Detect intersection inside the cycle
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow !== fast);

        // Phase 2: Find the cycle entrance
        let prob = nums[0];
        while (prob !== slow) {
            slow = nums[slow];
            prob = nums[prob];
        }

        // The entrance index is the duplicate number
        return prob;
    }
}