import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import { Category } from './enums';
import { Author, Book, Librarian, Logger, Magazine } from './interfaces';
import { PersonBook, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from './types';
import { getAllBooks, printRefBook, purge, getProperty, createCustomer, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from './functions';
import type { Library } from './classes/library';


/* eslint-disable no-redeclare */

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

interface Account {
    code: string;
    bank: string;
};

// ===================02.01
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.CSS));
// console.log(getBookAuthorByIndex(1));
// console.log(calcTotalPages());


// 03.01
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id}-${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Boris', 20));
// 03.02
// createCustomer('Ann', 23, 'Kyiv');
// console.log(getBookTitlesByCategory());
// console.log(getBookByID(1));

// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// const myBooks = сheckoutBooks('Ann', ...[1, 2, 4]);
// const myBooks = сheckoutBooks('Ann', [1, 2, 4]);
// console.log(myBooks);
// const arg: [number, string, boolean] = [1, '2', true];
// t1(arg);

// 03.03

// console.log(getTitles('Lea Verou'));
// console.log(getTitles(false));
// console.log(getTitles(1, true));


// 05.01

// const ref: ReferenceItem = new ReferenceItem(1, 'Learn TypeScript', 2021);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getID());

// 05.02, 05.03

// const refBook: Encyclopedia = new Encyclopedia(1, 'Learn TypeScript', 2021, 3);
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2021, 3);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();
// printRefBook(refBook);

const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
printRefBook(favoriteLibrarian);

// 05.04
// const favoriteLabrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLabrarian.name = 'Anna';
// favoriteLabrarian.assistCustomer('Boris');
// console.log(favoriteLabrarian);

// 05.05

// const pBook: PersonBook = {
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@example.com',
//     name: 'Anna',
//     title: 'Learn JS'
// };

// console.log(pBook);

// 06.05

// const flag = true;
// if (flag) {
//     const module = await import('./classes');

//     const reader = new module.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);

//     console.log(reader);
// }

// console.log(module);

// 06.06
// const lib: Library = new Library();
// const lib: Library = {
//     id: 1,
//     name: 'Anna',
//     address: 'Gomel, ...'
// };

// console.log(lib);

// 07.01

const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.SoftWare },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.SoftWare },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.SoftWare },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.SoftWare }
];
// const books = purge(inventory);
// console.log(books);

// const ns = purge([1, 2, 3, 4]);
// console.log(ns);

// 07.02

// const bookShelf = new Shelf<Book>();

// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();

// magazines.forEach(mag => magazineShelf.add(mag));


// 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five').title);

// const result = getProperty<Book, 'title'>(getAllBooks()[0], 'title');
// console.log(result);

// 07.04

// const book: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.CSS,
//     id: 1,
//     // pages: 200,
//     title: 'Unknown'
// };

// const book2: UpdatedBook = {
//     id: 1,
// };

// const args: Parameters<СreateCustomerFunctionType> = ['Anna'];

// createCustomer(...args);

// 07.05

// 08.01
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// UL.UniversityLibrarian['a'] = 1;
// UL.UniversityLibrarian.prototype['a'] = 1;

// 08.02

// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj

// 08.03

// const obj = new UL.UniversityLibrarian();

// obj.assistFaculty = null;
// obj.teachCommunity = null;
// console.log(obj);

// 08.04

// const refBook = new RefBook(1, 'Learn TypeScript', 2021, 3);
// console.log(refBook);

// 08.05

// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj.name = 'Anna';
// obj.assistCustomer('Boris');

// 08.06

// const obj = new UL.UniversityLibrarian();

// obj.name = 'Anna';
// console.log(obj);
// obj.assistCustomer('Boris');

// 08.07

// const refBook = new RefBook(1, 'Learn TypeScript', 2021, 3);
// refBook.copies = 10;
// console.log(refBook);

// 09.01
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.SoftWare, logCategorySearch);
// console.log('End');

// 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(numberOfBooks => console.log(numberOfBooks))
//     .catch(reason => console.log(reason))
//     .finally(() => console.log('Complete'));
// getBooksByCategoryPromise(Category.SoftWare)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason))
//     .finally(() => console.log('Complete'));
// console.log('End');

// 09.03
console.log('1');
const p = logSearchResults(Category.JavaScript)
    .catch(console.log);
console.log('2');