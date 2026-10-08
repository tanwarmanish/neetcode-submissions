// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(root) {
        if(!root) return null;

        // create nodes
        let ptr = root;
        while(ptr){
            const node = new Node(ptr.val,ptr.next,null);
            ptr.next = node;
            ptr = node.next;
        }
    
        // update random pointers
        ptr=root;
        while(ptr && ptr.next){
            ptr.next.random = ptr.random?ptr.random.next:null;
            ptr = ptr.next;
            if(ptr) ptr=ptr.next;
        }

        // sepearte heads
        let head1 = new Node(null,null,null);
        let head2 = new Node(null,null,null);
        ptr = root;
        let ptr1 = head1;
        let ptr2 = head2;
        let count = 0;
        while(ptr){
            if(count%2==0){
                ptr1.next = ptr;
                ptr1 = ptr1.next;
            }
            else{
                ptr2.next = ptr;
                ptr2 = ptr2.next;
            }
            ptr = ptr.next;
            count++;
        }

        return head2.next;
    }
}
