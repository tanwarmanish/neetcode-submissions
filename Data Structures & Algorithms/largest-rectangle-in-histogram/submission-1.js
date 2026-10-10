class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let n = heights.length;
        let maxArea = 0;
        for(let i=0;i<=n;i++){
            const currHeight = i==n?0:heights[i];
            while(stack.length && currHeight<heights[stack[stack.length-1]]){
                let topIndex = stack.pop();
                const h = heights[topIndex];
                const w = stack.length==0?i:i-stack[stack.length-1]-1;
                maxArea = Math.max(maxArea,h*w);
            }
            stack.push(i);
        }
        return maxArea;
    }
}
