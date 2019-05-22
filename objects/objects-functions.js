let myBook = {
    title : '1984',
    author : 'George Orwell',
    pageCount : 326
};

let otherBook = {
    title : 'A Peoples History',
    author : 'Howard Zinn',
    pageCount : 723
};

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    };

};

let bookSummary = getSummary(myBook);
let otherSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);
console.log(bookSummary.summary);
console.log(otherSummary);