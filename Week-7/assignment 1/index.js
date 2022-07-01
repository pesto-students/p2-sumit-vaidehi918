



var head;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}


function reverse(node) {
var prev = null;
var current = node;
var next = null;
    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    node = prev;
    return node;
}


function printList(node) {
    while (node != null) {
        document.write(node.data + " ");
        node = node.next;
    }
}



    head = new Node(5);
    head.next = new Node(1);
    head.next.next = new Node(34);
    head.next.next.next = new Node(2);

    document.write("Given Linked list<br/>");
    printList(head);
    head = reverse(head);
    document.write("<br/>");
    document.write("Reversed linked list<br/> ");
    printList(head);




