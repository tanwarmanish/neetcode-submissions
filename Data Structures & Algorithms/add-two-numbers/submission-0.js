/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let result = new ListNode();
        let p1 = l1;
        let p2 = l2;
        let r = result;
        let carry = 0;

        while(p1 && p2){
            let sum = p1.val + p2.val + carry;
            r.next = new ListNode(sum%10);
            r = r.next;
            carry = Math.floor(sum/10);
            p1 = p1.next;
            p2 = p2.next;
        }

        while(p1){
            let sum = p1.val + carry;
            r.next = new ListNode(sum%10);
            r = r.next;
            carry = Math.floor(sum/10);
            p1 = p1.next;
        }

        while(p2){
            let sum = p2.val + carry;
            r.next = new ListNode(sum%10);
            r = r.next;
            carry = Math.floor(sum/10);
            p2 = p2.next;
        }

        while(carry){
            r.next = new ListNode(carry%10);
            r = r.next;
            carry = Math.floor(carry/10);
        }
        
        return result.next;
    }
}
