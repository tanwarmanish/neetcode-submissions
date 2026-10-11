class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let h = numbers.length-1;
        while(l<h){
            let a = numbers[l];
            let b = numbers[h];
            if(a+b==target) return [l+1,h+1];
            else if(a+b>target){
                h--;
            }
            else{
                l++;
            }
        }

        return [0,1];
    }
}
