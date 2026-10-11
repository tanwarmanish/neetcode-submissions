class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
        let n = heights.length;
        let lMax = [heights[0]], rMax=[heights[n-1]];
        for(let i=1;i<n;i++){
            lMax.push(Math.max(heights[i-1],lMax[lMax.length-1]));
        }
        for(let i=n-2;i>=0;i--){
            rMax.unshift(Math.max(heights[i+1],rMax[0]));
        }

        let total = 0;
        for(let i=1;i<n-1;i++){
            let height = Math.min(lMax[i],rMax[i]);
            let water = heights[i]>height?0:height-heights[i];
            total += water;
        }

        return total;
    }
}
