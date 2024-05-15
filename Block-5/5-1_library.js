const express = require('express');
const app = express();
const port = 3001;

const books = [
    {
        "isbn": "978-3-16-148410-0",
        "title": "Das Leben des Galileo",
        "year": 2018,
        "author": "Bertolt Brecht"
    },
    {
        "isbn": "978-0-7432-7356-5",
        "title": "Der Alchemist",
        "year": 1988,
        "author": "Paulo Coelho"
    },
    {
        "isbn": "978-1-56619-909-4",
        "title": "Das Kapital",
        "year": 1867,
        "author": "Karl Marx"
    },
    {
        "isbn": "978-0-452-28423-4",
        "title": "1984",
        "year": 1949,
        "author": "George Orwell"
    },
    {
        "isbn": "978-0-7432-7356-6",
        "title": "Ein kurzer Abstieg",
        "year": 2003,
        "author": "John Doe"
    },
    {
        "isbn": "978-0-399-14372-4",
        "title": "Fahrenheit 451",
        "year": 1953,
        "author": "Ray Bradbury"
    },
    {
        "isbn": "978-0-14-028333-4",
        "title": "Die Verwandlung",
        "year": 1915,
        "author": "Franz Kafka"
    },
    {
        "isbn": "978-0-452-27750-4",
        "title": "Schöne neue Welt",
        "year": 1932,
        "author": "Aldous Huxley"
    },
    {
        "isbn": "978-0-553-21311-7",
        "title": "Der Herr der Ringe",
        "year": 1954,
        "author": "J.R.R. Tolkien"
    },
    {
        "isbn": "978-0-7432-7357-2",
        "title": "Die Stadt der träumenden Bücher",
        "year": 2004,
        "author": "Walter Moers"
    }
]

app.get('/books', (request, response) => {
  response.send(books);
});

app.get('/books/:isbn', (request, response) => {
    const isbn = request.params.isbn;
    console.log(isbn);
    const book = books.find(book => book.isbn === isbn);
    response.send(book);
});

app.post('/books', (request, response) => {
    let data = {
            isbn: "978-0-553-21311-8",
            title: "Moby Dick",
            year: 1851,
            author: "Herman Melville"
        }
    books.push(data);
    response.send(books);
});

app.put('/books/:isbn', (request, response) => {
    const theisbn = request.params.isbn;
    const book = books.find((book) => book.isbn == theisbn);
    let data = books.map((book) => {isbn:"978-0-14-028333-4"});
    
    console.log(data);
    response.send(books);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
