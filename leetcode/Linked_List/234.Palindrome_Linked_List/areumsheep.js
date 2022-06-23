/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // 없거나 1개일 때 true 리턴
    if(!head || !head.next) return true;
    
    let reverseValue = [];
    while(head) {
        reverseValue.push(head.val);
        head = head.next;
    }
    
    let left = 0, right = reverseValue.length -1;
    while(left <= right) {
        if(reverseValue[left] !== reverseValue[right])
            return false;
        left++;
        right--;
    }
    return true;
};
