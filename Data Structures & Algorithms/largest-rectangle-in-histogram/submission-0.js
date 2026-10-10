class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        for(let h=1;h<=Math.max(...heights);h++){
            let width = 0;
            for(let height of heights){
                if(h>height){
                    maxArea = Math.max(maxArea,width*h);
                    width = 0;
                }
                else{
                    width++;
                }
            }
            maxArea = Math.max(maxArea,width*h);
        }
        return maxArea;
    }
}
