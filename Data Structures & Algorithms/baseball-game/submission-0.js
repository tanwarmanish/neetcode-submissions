class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        for(let opr of operations){
            switch(opr){
                case '+':{
                    let b = stack.pop();
                    let a = stack.pop();
                    let c = a+b;
                    stack.push(a);
                    stack.push(b);
                    stack.push(c);
                    break;
                }
                case 'D':{
                    stack.push(stack[stack.length-1]*2);
                    break;
                }
                case 'C':{
                    stack.pop();
                    break;
                }
                default: stack.push(+opr);
            }
        }
        return stack.reduce((a,v)=>a+v,0);
    }
}
