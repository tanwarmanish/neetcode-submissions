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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        if (!head || k <= 1) return head;
        let dummy = new ListNode(null,head);
        let prev = dummy;
        let ptr = dummy;
        while(true){
            // check if k nodes exist
            for(let i=0;i<k && ptr;i++){
                ptr = ptr.next;
            }
            if(!ptr) break;

            // reverse k nodes
            let groupStart = ptr;
            let groupEnd = prev.next;
            let pNode = null;
            let cNode = prev.next;
            let nextGroup = ptr.next;
            while(cNode && cNode!=nextGroup){
                const nNode = cNode.next;
                cNode.next = pNode;
                pNode = cNode;
                cNode = nNode;
            }
            prev.next = groupStart;
            groupEnd.next = nextGroup;
            prev.next = groupStart;
            prev = groupEnd;
            ptr = groupEnd;
        }
        return dummy.next;

    }
}
