function mergeLists(head1, head2) {
    let merged = new SinglyLinkedListNode();
    let ref = merged;
    while(head1 && head2) {
        
        if(head1.data < head2.data) {
            ref.next = head1;
            head1 = head1.next;
        } else {
            ref.next = head2;
            head2 = head2.next;
        }
        ref = ref.next;
    }
    
    if(head1 || head2) {
        ref.next = !head1 ? head2 :  head1;
    }
    return merged.next;
}
