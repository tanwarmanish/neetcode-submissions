class Solution {
    isAlphaNumeric(char){
        return (char>='A' && char<='Z') ||
         (char>='a' && char<='z') ||
         (char>='0' && char<='9');
    }

    isPalindrome(s) {
        let l = 0;
        let h = s.length-1;
        while(l<h){
            while(!this.isAlphaNumeric(s[l]) && l<s.length) l++;
            while(!this.isAlphaNumeric(s[h]) && h>=0) h--;
            if(s[l] && s[h] && s[l].toLowerCase()!=s[h].toLowerCase()) {
                return false;
            }
            l++;
            h--;
        }
        return true;
    }
}
