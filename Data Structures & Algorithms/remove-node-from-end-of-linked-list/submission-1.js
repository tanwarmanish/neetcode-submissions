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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let fast = head;

        while(fast && n>0){
            n--;
            fast = fast.next;
        }
        
        if(!fast) return head.next;

        let slow = head;
        
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next?slow.next.next:null;

        return head;
    }
}
