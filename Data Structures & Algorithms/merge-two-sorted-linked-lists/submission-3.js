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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // init head
        if(!list1 && !list2) return null;
        if(!list1 && list2) return list2;
        if(!list2 && list1) return list1;
        let head = new ListNode(0,null);
        let temp = head;

        while(list1 && list2){
            if(list1.val <= list2.val){
                temp.next = list1;
                list1 = list1.next;
            }
            else{
                temp.next = list2;
                list2 = list2.next;
            }
            temp = temp.next;
        }

        temp.next = list1?list1:list2;
        return head.next;
    }
}
