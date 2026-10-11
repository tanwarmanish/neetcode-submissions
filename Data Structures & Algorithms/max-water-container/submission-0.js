class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxVolume = 0;
        let l = 0;
        let r = heights.length-1;
        while(l<r){
            let lh = heights[l];
            let rh = heights[r];
            let width = r-l;
            let volume = Math.min(lh,rh) * width;
            maxVolume = Math.max(maxVolume,volume);
            if(lh<=rh){
                l++;
            }
            else{
                r--;
            }
        }
        return maxVolume;
    }
}
