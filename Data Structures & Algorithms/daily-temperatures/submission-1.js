class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps) {
        const n = temps.length;
        const stack = [];
        const result = new Array(n).fill(0);
        for(let i=0;i<n;i++){
            const t = temps[i];
            while(stack.length && t>stack[stack.length-1][0]){
                const [sTemp,sIndex] = stack.pop();
                result[sIndex] = i-sIndex;
            }
            stack.push([t,i]);
        }
        return result;
    }
}
