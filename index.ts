import { Book } from "./Book/Book";
import { LinkedList } from "./LinkedList/LinkedList";
import { Ordering } from "./Ordering/BubbleSort";

/**
 * Creando Libros
 */
let book1 = new Book(1234, "Harry Potter");
let book2 = new Book(1235, "Diario de Anna Frank");
let book4 = new Book(1237, "El Tunel");
let book3 = new Book(1236, "El Corsario Negro");
let book5 = new Book(1237, "Alicia en el pais de las Maravillas");

/**
 * Creando Lista
 */
let list = new LinkedList();

/**
 * Agregando libros
 */
list.addFinish(book1);
list.addFinish(book2);
list.addFinish(book3);
list.addFinish(book4);

console.log("Libros:");
list.getValues();
console.log("--------\n");

console.log("Modificacion de libro en posicion 2");
list.setValue(2, book5);
console.log("--------\n");

/**
 * Ordenando de forma ascendente
 */
Ordering.bubbleSortAsc(list);
console.log("Libros:");
list.getValues();
console.log("--------\n");

/**
 * Ordenando de forma descendente
 */
Ordering.bubbleSortDesc(list);
console.log("Libros:");
list.getValues();
console.log("--------\n");