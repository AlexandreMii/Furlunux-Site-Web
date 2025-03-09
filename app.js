const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.use('/products', productRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/furlunux-ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Set EJS as the templating engine
app.set('view engine', 'ejs');  // <--- Add this line   

// Connect to MangoDB
mongoose.connect('mongodb://localhost:27017/furlunux-ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/products', productRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/furlunux-ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
