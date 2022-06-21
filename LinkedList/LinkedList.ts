import { Node } from "./Node";
import { Book } from "../Book/Book";

export class LinkedList {

    private start: Node;
    private length: number;

    constructor() {
        // @ts-ignore
        this.start = null;
        this.length = 0;
    }

    isEmpty(): boolean {
        return this.start == null;
    }

    getLength(): number {
        return this.length;
    }

    addFinish(value: Book): void {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.start = node;
        } else {
            let pointer = this.start;
            while (pointer.next != null) {
                pointer = pointer.next;
            }
            pointer.next = node;
        }
        this.length += 1;
    }

    getValues(): void {
        let pointer = this.start;
        while (pointer != null) {
            console.log(pointer.value.name);
            pointer = pointer.next;
        }
    }

    getValue(n: number): Book {
        if (this.isEmpty()) {
            // @ts-ignore
            return null;
        } else {
            let pointer = this.start;
            let counter = 0;

            while ( counter < n && pointer.next != null ) {
                pointer = pointer.next;
                counter += 1;
            }

            if ( counter != n ) {
                // @ts-ignore
                return null;
            } else {
                return pointer.value;
            }
        }
    }

    setValue(n: number, newValue: Book): void {
        let pointer = this.start;
        let counter = 0;

        while ( counter < n && pointer.next != null ) {
            pointer = pointer.next;
            counter += 1;
        }

        pointer.value = newValue;
    }
}