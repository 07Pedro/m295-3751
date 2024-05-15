const express = require("express")
const swaggerAutogen = require('swagger-autogen')();
const swaggerUi = require('swagger-ui-express');
const app = express()
const port = 3000

const doc = {
  info: {
    version: '',
    title: '',
    description: ''
  },
  servers: [
    {
      url: '',
      description: ''
    },
  ],
  tags: [
    {
      name: '',
      description: '' 
    },
  ],
  components: {}
};

const outputFile = './swagger.json';
const routes = ['../Block-5/5-1_library.js'];
swaggerAutogen(outputFile, routes, doc).then(() => {
	const swaggerDocument = require(outputFile);
	app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});