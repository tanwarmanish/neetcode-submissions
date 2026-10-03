class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

let zeros = 0;

let pTotal = 1;

for(let i=0;i<nums.length;i++){

const value = nums[i];

if(value==0) zeros++;

else pTotal *= value;

}

return nums.map(num=>{

if(zeros>1 || (zeros==1 && num!=0)) return 0;

else if(zeros==1 && num==0) return pTotal;

else return pTotal/num;;

});
}}
