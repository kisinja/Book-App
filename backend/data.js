const books = [
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "description": "A novel about the serious issues of rape and racial inequality.",
        "genre": "Fiction",
        "price": 10.99,
        "image_link": "https://m.media-amazon.com/images/I/81OdwZG3JeL._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1960
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "description": "A dystopian social science fiction novel and cautionary tale about the future.",
        "genre": "Science Fiction",
        "price": 8.99,
        "image_link": "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1949
    },
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "description": "A novel about the American dream and the roaring twenties.",
        "genre": "Fiction",
        "price": 9.99,
        "image_link": "https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1925
    },
    {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "description": "A novel about the challenges of teenage life and alienation.",
        "genre": "Fiction",
        "price": 7.99,
        "image_link": "https://m.media-amazon.com/images/I/81OthjkJBuL._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1951
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "description": "A romantic novel that critiques the British landed gentry at the end of the 18th century.",
        "genre": "Romance",
        "price": 6.99,
        "image_link": "https://m.media-amazon.com/images/I/81Ox45aV8hL._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1813
    },
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "description": "A fantasy novel that precedes the Lord of the Rings series.",
        "genre": "Fantasy",
        "price": 12.99,
        "image_link": "https://m.media-amazon.com/images/I/91b0C2YNSrL._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1937
    },
    {
        "title": "Moby Dick",
        "author": "Herman Melville",
        "description": "A novel about the voyage of the whaling ship Pequod.",
        "genre": "Adventure",
        "price": 11.99,
        "image_link": "https://m.media-amazon.com/images/I/81bGdQ--HbL._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1851
    },
    {
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "description": "A novel that chronicles the history of the French invasion of Russia.",
        "genre": "Historical Fiction",
        "price": 14.99,
        "image_link": "https://m.media-amazon.com/images/I/91A8MfSCrqL._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1869
    },
    {
        "title": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "description": "A novel about the mental anguish and moral dilemmas of a young man.",
        "genre": "Philosophical Fiction",
        "price": 9.49,
        "image_link": "https://m.media-amazon.com/images/I/91Hd4ZCBzEL._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1866
    },
    {
        "title": "The Brothers Karamazov",
        "author": "Fyodor Dostoevsky",
        "description": "A philosophical novel that enters deeply into the ethical debates of God, free will, and morality.",
        "genre": "Philosophical Fiction",
        "price": 13.99,
        "image_link": "https://m.media-amazon.com/images/I/81vn9Wr-+WL._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1880
    },
    {
        "title": "Jane Eyre",
        "author": "Charlotte Brontë",
        "description": "A novel that follows the emotions and experiences of its eponymous heroine.",
        "genre": "Romance",
        "price": 7.49,
        "image_link": "https://m.media-amazon.com/images/I/91LxqIs2A5L._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1847
    },
    {
        "title": "Wuthering Heights",
        "author": "Emily Brontë",
        "description": "A tale of the all-encompassing and passionate, yet thwarted, love between Heathcliff and Catherine Earnshaw.",
        "genre": "Romance",
        "price": 6.99,
        "image_link": "https://m.media-amazon.com/images/I/81YY1gx-UeL._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1847
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "description": "A dystopian novel set in a futuristic World State, where citizens are environmentally engineered into an intelligence-based social hierarchy.",
        "genre": "Science Fiction",
        "price": 8.99,
        "image_link": "https://m.media-amazon.com/images/I/81kqDn2w2XL._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1932
    },
    {
        "title": "The Odyssey",
        "author": "Homer",
        "description": "An ancient Greek epic poem that follows the hero Odysseus as he journeys home after the fall of Troy.",
        "genre": "Epic",
        "price": 10.49,
        "image_link": "https://m.media-amazon.com/images/I/81fkwXWDh9L._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": -800
    },
    {
        "title": "The Iliad",
        "author": "Homer",
        "description": "An ancient Greek epic poem set during the Trojan War.",
        "genre": "Epic",
        "price": 10.49,
        "image_link": "https://m.media-amazon.com/images/I/81h2gWPTYJL._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": -750
    },
    {
        "title": "Frankenstein",
        "author": "Mary Shelley",
        "description": "A novel about a young scientist who creates a grotesque but sentient creature in an unorthodox scientific experiment.",
        "genre": "Horror",
        "price": 7.99,
        "image_link": "https://m.media-amazon.com/images/I/81UoCYEAhWL._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1818
    },
    {
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "description": "An epic high-fantasy novel that follows the quest to destroy the One Ring.",
        "genre": "Fantasy",
        "price": 20.99,
        "image_link": "https://m.media-amazon.com/images/I/91b0C2YNSrL._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1954
    },
    {
        "title": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "description": "A philosophical novel about a young man whose portrait ages instead of him.",
        "genre": "Philosophical Fiction",
        "price": 8.49,
        "image_link": "https://m.media-amazon.com/images/I/81VGfZx6-3L._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1890
    },
    {
        "title": "Dracula",
        "author": "Bram Stoker",
        "description": "A gothic horror novel introducing the character of Count Dracula.",
        "genre": "Horror",
        "price": 9.99,
        "image_link": "https://m.media-amazon.com/images/I/81oPOh9rQtL._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1897
    },
    {
        "title": "The Metamorphosis",
        "author": "Franz Kafka",
        "description": "A novella about a man who transforms into a giant insect.",
        "genre": "Absurdist Fiction",
        "price": 5.99,
        "image_link": "https://m.media-amazon.com/images/I/71xBLRBYOiL._AC_UY327_FMwebp_QL65_.jpg",
        "publishYear": 1915
    }
];

module.exports = books;