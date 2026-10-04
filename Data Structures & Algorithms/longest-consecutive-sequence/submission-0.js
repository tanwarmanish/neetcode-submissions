class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) return 0;
        let maxStreak = 0;
        let set = new Set(nums);
        for(let num of set){
            if(!set.has(num-1)){
                let streak = 1;
                let current = num;
                while(set.has(current+1)){
                    current++;
                    streak++;
                }
                maxStreak = Math.max(maxStreak,streak);
            }
        }
        return maxStreak;
    }
}
