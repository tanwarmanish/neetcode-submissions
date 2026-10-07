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

        // copy head
        let head = new Node(root.val,null,null);

        // copy next ptrs
        let oPtr = root.next || null;
        let cPtr = head || null;
        let nodeMap = new Map();
        nodeMap.set(root,head);
        while(oPtr){
            const node = new Node(oPtr.val,null,null);
            nodeMap.set(oPtr,node);
            oPtr = oPtr.next;
            cPtr.next=node;
            cPtr = node;
        }

        // copy random pointers
        oPtr = root;
        cPtr = head;
        while(cPtr){
            cPtr.random = nodeMap.get(oPtr.random);
            oPtr = oPtr.next;
            cPtr = cPtr.next;
        }     

        return head;
    }
}
