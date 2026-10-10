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
    mergeList(list1,list2){
        let head = new ListNode();
        let ptr = head;
        let a = list1;
        let b = list2;
        while(a && b){
            if(a.val<=b.val){
                ptr.next = a;
                a = a.next;
            }
            else{
                ptr.next = b;
                b = b.next;
            }
            ptr = ptr.next;
        }

        ptr.next = a?a:b;
        return head.next;
    }
    
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || lists.length === 0) return null;
        while(lists.length>1){
            for(let i=0;i<lists.length;i+=2){
                lists[i] = this.mergeList(lists[i],lists[i+1] || null);
            }
            lists = lists.filter((a,i)=>i%2==0);
        }
        return lists[0];
    }
}
