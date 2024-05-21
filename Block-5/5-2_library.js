const { v4: uuidv4 } = require('uuid')
const express = require('express')
const app = express()
const port = 3001

const books = [
  {
    isbn: '978-3-16-148410-0',
    title: 'Das Leben des Galileo',
    year: 2018,
    author: 'Bertolt Brecht'
  },
  {
    isbn: '978-0-7432-7356-5',
    title: 'Der Alchemist',
    year: 1988,
    author: 'Paulo Coelho'
  },
  {
    isbn: '978-1-56619-909-4',
    title: 'Das Kapital',
    year: 1867,
    author: 'Karl Marx'
  },
  {
    isbn: '978-0-452-28423-4',
    title: '1984',
    year: 1949,
    author: 'George Orwell'
  },
  {
    isbn: '978-0-7432-7356-6',
    title: 'Ein kurzer Abstieg',
    year: 2003,
    author: 'John Doe'
  },
  {
    isbn: '978-0-399-14372-4',
    title: 'Fahrenheit 451',
    year: 1953,
    author: 'Ray Bradbury'
  },
  {
    isbn: '978-0-14-028333-4',
    title: 'Die Verwandlung',
    year: 1915,
    author: 'Franz Kafka'
  },
  {
    isbn: '978-0-452-27750-4',
    title: 'Schöne neue Welt',
    year: 1932,
    author: 'Aldous Huxley'
  },
  {
    isbn: '978-0-553-21311-7',
    title: 'Der Herr der Ringe',
    year: 1954,
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: '978-0-7432-7357-2',
    title: 'Die Stadt der träumenden Bücher',
    year: 2004,
    author: 'Walter Moers'
  }
]

const lends = [
  {
    id: '',
    customer_id: '12345',
    isbn: '978-3-16-148410-0',
    borrowed_at: '',
    returned_at: ''
  },
  {
    id: '',
    customer_id: '67890',
    isbn: '978-0-7432-7356-5',
    borrowed_at: '',
    returned_at: ''
  },
  {
    id: '',
    customer_id: '54321',
    isbn: '978-1-56619-909-4',
    borrowed_at: '',
    returned_at: ''
  },
  {
    id: '',
    customer_id: '09876',
    isbn: '978-0-452-28423-4',
    borrowed_at: '',
    returned_at: ''
  },
  {
    id: '',
    customer_id: '13579',
    isbn: '978-0-7432-7356-6',
    borrowed_at: '',
    returned_at: ''
  },
  {
    id: '',
    customer_id: '24680',
    isbn: '978-0-399-14372-4',
    borrowed_at: '',
    returned_at: ''
  },
  {
    id: '',
    customer_id: '11111',
    isbn: '978-0-014-028333-4',
    borrowed_at: '',
    returned_at: ''
  },
  {
    id: '',
    customer_id: '22222',
    isbn: '978-0-452-27750-4',
    borrowed_at: '',
    returned_at: ''
  },
  {
    id: '',
    customer_id: '33333',
    isbn: '978-0-553-21311-7',
    borrowed_at: '',
    returned_at: ''
  },
  {
    id: '',
    customer_id: '44444',
    isbn: '978-0-7432-7357-2',
    borrowed_at: '',
    returned_at: ''
  }
]

lends.forEach(booklend => {
  booklend.id = uuidv4()
})

// console.log(lends);

app.get('/lends', (request, response) => {
  response.send(lends)
})

app.get('/lends/:id', (request, response) => {
  const id = request.params.id
  const lend = lends.find(lend => lend.id === id)
  response.send(lend)
})

const lendData = {
  id: uuidv4(),
  customer_id: '55555',
  isbn: '978-0-553-21311-8',
  borrowed_at: '',
  returned_at: ''
}

const time = Date.now()
console.log(Date.now())

app.post('/lends', (request, response) => {
  lends.push(lendData)
  response.send(lends)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
