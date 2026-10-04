class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */

    compute(stack,operator){
        const b = stack.pop();
        const a = stack.pop();
        let value = 0;
        if(operator=='+'){
            value = a+b;
        }
        else if(operator=='-'){
            value = a-b;
        }
        else if(operator=='*'){
            value = a*b;
        }
        else if(operator=='/'){
            value = a/b | 0;
        }
        stack.push(value);
    }

    evalRPN(tokens) {
        const stack = [];
        for(let token of tokens){
            switch(token){
                case '+':
                case '-':
                case '*':
                case '/':{
                    this.compute(stack,token);
                    break;
                }
                default:{
                    stack.push(+token);
                    break;
                }
            }
        }
        return stack.pop();
    }
}
