function mergeTwoLists (l1, l2) {
    let mergedLinkedListHead = {val: -1, next: null}
    let runner = mergedLinkedListHead;

    while(l1 && l2) {
        if(l1.val > l2.val) {
            runner.next = l2;
            l2 = l2.next;
        } else {
            runner.next = l1;
            l1 = l1.next;
        }
        runner = runner.next;
    }
    runner.next = l1 || l2;
    return mergedLinkedListHead.next;
}