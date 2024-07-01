require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(cors(
    {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type']
    }
));
app.use(morgan('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { connectDB } = require('./db');
const books = require('./data');
const bookRouter = require('./routes/book');

const Book = require('./models/Book');

app.use('/api/books', bookRouter);

const port = process.env.PORT || 5000;

const start_server = async () => {
    try {
        await connectDB();
        /* await Book.insertMany(books); */
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

start_server();