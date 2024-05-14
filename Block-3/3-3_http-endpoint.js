const express = require('express');
const app = express();
const port = 3001;

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.get('/now', (request, response) => {
    response.send(new Date());
  });

  app.get('/zli', (request, response) => {
    response.redirect("https://www.zli.ch/");
  });

  app.get('/name', (request, response) => {
    let arr = ["Bob", "Merlin", "Goofy", "Pedro", "Emanuel", "Bernie", "Tom", "Tim", "Azerbajdzan"]
    response.send(arr[(Math.floor(Math.random() * arr.length))]);
  });

  app.get('/html', (request, response) => {
    response.sendFile('/workspaces/javascript-node/Block-3/content.html');
  });

  app.get('/image', (request, response) => {
    response.sendFile('/workspaces/javascript-node/Block-3/huge-burger.0.jpg');
  });

  app.get('/teapot', (request, response) => {
    response.sendStatus(418);
  });

  app.get('/user-agent', (request, response) => {
    response.send(window.navigator.userAgent);
  });

  app.get('/secret', (request, response) => {
    response.sendStatus(403);
  });

  app.get('/xml', (request, response) => {
    response.sendFile('/workspaces/javascript-node/Block-3/content.xml');
  });

  app.get('/me', (request, response) => {
    let text = '{ "me" : { "firstName":"Petr" , "lastName":"Cerny" , "age":"17" , "place of resident":"Stallikon" , "Eye colour":"Blue" }}';  
    const obj = JSON.parse(text);
    response.send(obj);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


//app.post('/brew-coffee', (req, res) => {
//  res.status(418).send({
//      status: 418,
//      error: "I'm a teapot"
//  });
//});
