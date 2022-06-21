import { Book } from "../Book/Book";

export class Node {

    public value: Book;
    public next: Node;

    constructor(value: Book) {
        // @ts-ignore
        this.next = null;
        this.value = value;
    }
}