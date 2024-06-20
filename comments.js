// Create web server
// Create a new web server using the express library
// Import the express library
const express = require('express');
// Create a new web server
const app = express();
// Import the comments array
const comments = require('./data/comments');
// Import the products array
const products = require('./data/products');
// Set the port for the web server
const port = 4001;
// Import the body-parser library
const bodyParser = require('body-parser');
// Use the body-parser library with the app
app.use(bodyParser.json());
// Import the cors library
const cors = require('cors');
// Use the cors library with the app
app.use(cors());
// Import the products.js file
const productsRouter = require('./products');
// Use the productsRouter with the app
app.use('/products', productsRouter);
// Create a new comments array
let commentsIdCounter = comments.length;