const session = require('express-session')
const express = require('express')
const sessionstorage = require('sessionstorage')
const app = express()
const port = 3001

app.use(session({
  secret: 'keyboardcat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.post('/:name', function (req, res) {
  const name = req.params.name
  req.session.name = name

  res.send('Hello ' + req.session.name)
})

app.get('/name', function (req, res) {
  const thesessionname = req.session.name

  res.send(thesessionname)
})

app.delete('/:name', function (req, res) {
  sessionstorage.removeItem(req.session.name)
  res.send(req.session.name)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
