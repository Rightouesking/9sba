var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// ==== Declaring variables ==========
// type string
var quote = "The greatest glory in living lies not in never falling, but in rising every time we fall.";
var author = "Nelson Mandela";
// type number
var year = 1944;
// type boolean
var isFamous = true;
// type string array
var otherQuotes = [
    "The way to get started is to quit talking and begin doing.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "Life is what happens when you're busy making other plans.",
];
// type number array
var publicationYears = [1940, 1962, 1976, 1983];
// type tuple
var awardsAndYear = ["Best selling author", 1999];
// type enum
var Genre;
(function (Genre) {
    Genre[Genre["Fiction"] = 0] = "Fiction";
    Genre[Genre["NonFiction"] = 1] = "NonFiction";
    Genre[Genre["Mystery"] = 2] = "Mystery";
    Genre[Genre["Romance"] = 3] = "Romance";
    Genre[Genre["Biography"] = 4] = "Biography";
    Genre[Genre["History"] = 5] = "History";
    Genre[Genre["Science"] = 6] = "Science";
})(Genre || (Genre = {}));
var genre = Genre.Mystery;
// type Book
var book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    publicationYear: 1988,
    genre: Genre.Fiction,
    isAvailable: true,
};
// type Book array
var books = [book];
// function
function addBook(newBook) {
    books.push(__assign({}, newBook));
}
console.log(books);
