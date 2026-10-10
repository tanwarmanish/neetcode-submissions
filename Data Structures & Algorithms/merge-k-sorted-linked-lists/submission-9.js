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
    mergeList(list1, list2) {
        let dummy = new ListNode();
        let ptr = dummy;
        let a = list1;
        let b = list2;

        while (a && b) {
            if (a.val <= b.val) {
                ptr.next = a;
                a = a.next;
            } else {
                ptr.next = b;
                b = b.next;
            }
            ptr = ptr.next;
        }

        ptr.next = a ? a : b;
        return dummy.next;
    }

    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || lists.length === 0) return null;

        // Keep merging lists pairwise until only one list remains
        while (lists.length > 1) {
            const mergedLists = [];

            for (let i = 0; i < lists.length; i += 2) {
                const l1 = lists[i];
                const l2 = i + 1 < lists.length ? lists[i + 1] : null;
                mergedLists.push(this.mergeList(l1, l2));
            }

            lists = mergedLists;
        }

        return lists[0];
    }
}