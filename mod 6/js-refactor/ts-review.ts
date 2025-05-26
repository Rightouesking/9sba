// ==== Declaring variables ==========
// type string
let quote: string =
  "The greatest glory in living lies not in never falling, but in rising every time we fall.";

let author: string = "Nelson Mandela";

// type number
let year: number = 1944;

// type boolean
let isFamous: boolean = true;

// type string array
let otherQuotes: string[] = [
  "The way to get started is to quit talking and begin doing.",
  "If life were predictable it would cease to be life, and be without flavor.",
  "Life is what happens when you're busy making other plans.",
];

// type number array
let publicationYears: number[] = [1940, 1962, 1976, 1983];

// type tuple
let awardsAndYear: [string, number] = ["Best selling author", 1999];

// type enum
enum Genre {
  Fiction,
  NonFiction,
  Mystery,
  Romance,
  Biography,
  History,
  Science,
}

let genre: Genre = Genre.Mystery;

// interface
interface Book {
  title: string;
  author: string;
  publicationYear: number;
  genre: Genre;
  isAvailable: boolean;
}

// type Book
let book: Book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  publicationYear: 1988,
  genre: Genre.Fiction,
  isAvailable: true,
};

// type Book array
const books: Book[] = [book];

// function
function addBook(newBook: Book): void {
  books.push({...newBook});
}

console.log(books)
