const express = require('express')
const session = require('express-session')
const { v4: uuidv4 } = require('uuid')
const app = express()

app.use(express.json())
app.use(session({
  secret: 'supersecret',
	resave: false,
	saveUninitialized: false,
  cookie: {}
}))

const secretAdminCredentials = { email: "desk@library.example", password: "m295" }

console.log(secretAdminCredentials);

app.post('/login', function (request, response) {
	const { email, password } = request.body
	if (email?.toLowerCase() == secretAdminCredentials.email && password == secretAdminCredentials.password) {
		request.session.email = email
		return response.status(200).json({ email: request.session.email })
	}

  return response.status(401).json({ error: "Invalid credentials" })
})

app.get('/verify', function (request, response) {
	if (request.session.email) {
		return response.status(200).json({ email: request.session.email })
	}

  return response.status(401).json({ error: "Not logged in" })
})

app.delete('/logout', function (request, response) {
	if (request.session.email) {
		request.session.email = null
		return response.status(204).send()
	}

  return response.status(401).json({ error: "Not logged in" })
})



let books = [
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
];

let lends = [
    {
        id: '',
        customer_id: '12345',
        isbn: '978-3-16-148410-0',
        borrowed_at: '1716291670365',
        returned_at: ''
    },
    {
        id: '',
        customer_id: '67890',
        isbn: '978-0-7432-7356-5',
        borrowed_at: '1716291670365',
        returned_at: ''
    },
    {
        id: '',
        customer_id: '54321',
        isbn: '978-1-56619-909-4',
        borrowed_at: '1716291670365',
        returned_at: ''
    },
    {
        id: '',
        customer_id: '09876',
        isbn: '978-0-452-28423-4',
        borrowed_at: '1716291670365',
        returned_at: ''
    },
    {
        id: '',
        customer_id: '13579',
        isbn: '978-0-7432-7356-6',
        borrowed_at: '1716291670365',
        returned_at: ''
    },
    {
        id: '',
        customer_id: '24680',
        isbn: '978-0-399-14372-4',
        borrowed_at: '1716291670365',
        returned_at: ''
    },
    {
        id: '',
        customer_id: '11111',
        isbn: '978-0-014-028333-4',
        borrowed_at: '1716291670365',
        returned_at: ''
    },
    {
        id: '',
        customer_id: '22222',
        isbn: '978-0-452-27750-4',
        borrowed_at: '1716291670365',
        returned_at: ''
    },
    {
        id: '',
        customer_id: '33333',
        isbn: '978-0-553-21311-7',
        borrowed_at: '1716291670365',
        returned_at: ''
    },
    {
        id: '',
        customer_id: '44444',
        isbn: '978-0-7432-7357-2',
        borrowed_at: '1716291670365',
        returned_at: ''
    }
];

app.get('/books', (request, response) => {
    response.send(books);
});

app.get('/books/:isbn', (request, response) => {
    const isbn = request.params.isbn;
    const book = books.find(book => book.isbn === isbn);
    response.send(book);
});

const bookData = {
    isbn: "978-0-553-21311-8",
    title: "Moby Dick",
    year: 1851,
    author: "Herman Melville"
}

app.post('/books', (request, response) => {
    books.push(bookData);
    response.send(books);
});

app.put('/books/:isbn', (request, response) => {
    const isbn = request.params.isbn;
    const thebook = books.find(book => book.isbn == isbn);
    console.log(thebook);

    var index = books.indexOf(thebook);
    if (~index) {
        books[index] = bookData;
    }
    response.send(books);
});

app.delete('/books/:isbn', (request, response) => {
    const isbn = request.params.isbn;
    const thebook = books.find(book => book.isbn == isbn);
    console.log(thebook);
    const theindex = books.indexOf(thebook);
    const bookToRemove = books.splice(theindex, 1);
        
    console.log(bookToRemove);
    response.send(books);
});

const editbooks = (books, property, oldValue, newValue) => {
    return books.map(item => {
        var temp = Object.assign({}, item);
        if (temp[property] === oldValue) {
            temp[property] = newValue;
        }
        return temp;
    });
}

app.patch('/books/:isbn', (request, response) => {
    const isbn = request.params.isbn;
    const thebook = books.find(book => book.isbn == isbn);
    console.log(thebook);

    books = editbooks(books, "isbn", "978-0-553-21311-7", "978-0-553-21311-8")
    books = editbooks(books, "title", "Der Herr der Ringe", "Moby Dick")
    books = editbooks(books, "year", "1954", "1851")
    books = editbooks(books, "author", "J.R.R. Tolkien", "Herman Melville")
    
    response.send(books);
});

// ------------------------------------------------------------------------

lends.forEach(booklend => {
    booklend.id = uuidv4();   
});
//console.log(lends);

app.get('/lends', (request, response) => {
  response.send(lends);
});

app.get('/lends/:id', (request, response) => {
    const id = request.params.id;
    const lend = lends.find(lend => lend.id === id);
    response.send(lend);
});

const lendData = {
    id: uuidv4(),
    customer_id: '55555',
    isbn: '978-3-16-148410-0',
    borrowed_at: '',
    returned_at: ''
}

let time = Date.now();
console.log(Date.now());

app.post('/lends', (request, response) => {
    lends.push(lendData);
    console.log(lends = editlends(lends, "borrowed_at", null, time));
    lends = editlends(lends, "borrowed_at", '', time);
    response.send(lends);
});

app.delete("/lends/:id", (req, res) => {
	const id = req.params.id
	lends = lends.filter(e => e.id != id)
	res.status(200).send(lends)
})

const editlends = (lends, property, oldValue, newValue) => {
    return lends.map(item => {
        var temp = Object.assign({}, item);
        if (temp[property] === oldValue) {
            temp[property] = newValue;
        }
        return temp;
    });
}

app.listen(3000);
