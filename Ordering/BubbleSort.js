"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ordering = void 0;
class Ordering {
    static bubbleSortAsc(list) {
        let i = 1;
        let ordered = false;
        while (i < list.getLength() && !ordered) {
            ordered = true;
            for (let j = 0; j < (list.getLength() - 1); j++) {
                let k = j + 1;
                // Libro izquierda
                let book1 = list.getValue(j);
                // Libro derecha
                let book2 = list.getValue(k);
                if (book1.name > book2.name) {
                    ordered = false;
                    list.setValue(j, book2);
                    list.setValue(k, book1);
                }
            }
            i += 1;
        }
        return list;
    }
    static bubbleSortDesc(list) {
        let i = 1;
        let ordered = false;
        while (i < list.getLength() && !ordered) {
            ordered = true;
            for (let j = 0; j < (list.getLength() - 1); j++) {
                let k = j + 1;
                // Libro izquierda
                let book1 = list.getValue(j);
                // Libro derecha
                let book2 = list.getValue(k);
                if (book2.name > book1.name) {
                    ordered = false;
                    list.setValue(j, book2);
                    list.setValue(k, book1);
                }
            }
            i += 1;
        }
        return list;
    }
}
exports.Ordering = Ordering;
