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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if(!head || !head.next) return head;
        let p = head;
        let c = head.next;
        while(c){
            let n =  c.next;
            c.next = p;
            p = c;
            c = n;
        }
        head.next = null;
        head = p;
        return head;
    }
}
