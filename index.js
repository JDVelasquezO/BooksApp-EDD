"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book/Book");
const LinkedList_1 = require("./LinkedList/LinkedList");
const BubbleSort_1 = require("./Ordering/BubbleSort");
/**
 * Creando Libros
 */
let book1 = new Book_1.Book(1234, "Harry Potter");
let book2 = new Book_1.Book(1235, "Diario de Anna Frank");
let book4 = new Book_1.Book(1237, "El Tunel");
let book3 = new Book_1.Book(1236, "El Corsario Negro");
let book5 = new Book_1.Book(1237, "Alicia en el pais de las Maravillas");
/**
 * Creando Lista
 */
let list = new LinkedList_1.LinkedList();
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
BubbleSort_1.Ordering.bubbleSortAsc(list);
console.log("Libros:");
list.getValues();
console.log("--------\n");
/**
 * Ordenando de forma descendente
 */
BubbleSort_1.Ordering.bubbleSortDesc(list);
console.log("Libros:");
list.getValues();
console.log("--------\n");
