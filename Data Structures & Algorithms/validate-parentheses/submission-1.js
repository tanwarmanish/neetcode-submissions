class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const top = ()=>stack[stack.length-1] || null;
        for(let char of s){
            switch(char){
                case '(':
                case '[':
                case '{':{
                    stack.push(char);
                    break;
                }
                case ')':{
                    if(top()!='(') return false;
                    stack.pop();
                    break;
                }
                case '}':{
                    if(top()!='{') return false;
                    stack.pop();
                    break;
                }
                case ']':{
                    if(top()!='[') return false;
                    stack.pop();
                    break;
                }
            }
        }
        return stack.length==0;
    }
}
