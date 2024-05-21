const express = require('express');
const app = express();
const port = 3001;

const userName = 'zli'
const passWord = 'zli1234'

app.get('/public', (request, response) => {
    response.send("this is public");
    });

    app.get('/private', (request, response, next) => {
        const authheader = request.headers.authorization;
        // nicht authentifiziert -> error 401
        if (!authheader) {
            let err = new Error('You are not authenticated!');
            response.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            return next(err)
        }
        
        // verschlüsseltes array für user/pass
        const auth = new Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
        const user = auth[0];
        const pass = auth[1];

        // checken ob user&pass übereinstimmen
        if (user == userName && pass == passWord) {
            response.send("this is private");
        } else {
            let err = new Error('You are not authenticated!');
            response.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            return next(err);
        }
    });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});