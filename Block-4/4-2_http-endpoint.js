const express = require('express');
const app = express();
const port = 3001;

  function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
  }

  app.get('/now', (requestNow, responseNow) => {
    const timezone = requestNow.query.tz;
    console.log(timezone);
    if(timezone != undefined) {
      const convertedDate = convertTZ(new Date(), "Asia/Jakarta");
      responseNow.send(convertedDate);
    } else {
      responseNow.send(new Date());
    }
  });

  let dataList = [];

  app.post('/names', (request, response) => {
    const data = "the Dude";
    dataList.push(data);
    response.send(dataList);
  });

  let arr = ["Bob", "Merlin", "Goofy", "Pedro", "Emanuel", "Bernie", "Tom", "Tim", "Azerbajdzan"];

  app.delete('/names', (request, response) => {
    arr.list = [];
    if (arr = null) {
    response.sendStatus(204);
  } else {
    response.send(arr);
  }
  });

  app.get('/secret2', (request, response) => {
    let bigHeader = JSON.stringify(request.headers.get);
    console.log(bigHeader);
    if (bigHeader == 'Basic aGFja2VyOjEyMzQ=') {
      response.sendStatus(200)
    } else {
      response.sendStatus(401)
    }
  });

  app.get('/chuck', (request, response) => {
    const theName = request.query.name;
    if (theName != undefined) {
      fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(data => {
        let chuckjoke = data.value;
        const chuckerjoker = chuckjoke.replace("Chuck Norris", theName);
        response.send(chuckerjoker);
    })
    }
    else {
    fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(data => {
        const chuckjoke = data.value;
        console.log(chuckjoke);
        response.send(chuckjoke);
    })}
  });

  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
