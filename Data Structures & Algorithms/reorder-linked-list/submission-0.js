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
     * @return {void}
     */

    reverse(head){
        if(!head) return head;
        let p = null;
        let c = head;
        while(c){
            let t = c.next;
            c.next = p;
            p = c;
            c = t;
        }
        return p;
    }

    findMid(head){
        if(!head) return head;

        let s = head;
        let f = head.next;
        while(f && f.next){
            s = s.next;
            f = f.next;
            f = f.next;
        }
        return s;
    }

    merge(head1,head2){
        let a = head1;
        let b = head2;
        let head = new ListNode(0,null);
        let t = head;
        let flag = true;

        while(a && b){
            if(flag){
                t.next = a;
                a = a.next;
            }
            else{
                t.next = b;
                b = b.next;
            }
            t = t.next;
            flag =!flag;
        }
        t.next = a?a:b;
        return head.next;
    }

    reorderList(head1) {
        let mid = this.findMid(head1);
        let head2 = mid.next;
        mid.next = null;
        head2 = this.reverse(head2);
        head1 = this.merge(head1,head2);
        return head1;
    }
}
