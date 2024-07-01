const books = [
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "description": "A novel set in the Roaring Twenties that tells the story of Jay Gatsby's unrequited love for Daisy Buchanan.",
        "genre": "Classic",
        "price": 10.99,
        "img": "https://example.com/images/great_gatsby.jpg",
        "publishYear": 1925
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "description": "A novel about the serious issues of rape and racial inequality, seen through the eyes of a young girl.",
        "genre": "Classic",
        "price": 7.99,
        "img": "https://example.com/images/to_kill_a_mockingbird.jpg",
        "publishYear": 1960
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "description": "A dystopian novel set in a totalitarian society under constant surveillance.",
        "genre": "Dystopian",
        "price": 8.99,
        "img": "https://example.com/images/1984.jpg",
        "publishYear": 1949
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "description": "A romantic novel that also critiques the British landed gentry at the end of the 18th century.",
        "genre": "Romance",
        "price": 6.99,
        "img": "https://example.com/images/pride_and_prejudice.jpg",
        "publishYear": 1813
    },
    {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "description": "A novel about teenage rebellion and alienation, narrated by the protagonist, Holden Caulfield.",
        "genre": "Classic",
        "price": 9.99,
        "img": "https://example.com/images/catcher_in_the_rye.jpg",
        "publishYear": 1951
    },
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "description": "A fantasy novel that follows the quest of Bilbo Baggins to win a share of the treasure guarded by Smaug the dragon.",
        "genre": "Fantasy",
        "price": 12.99,
        "img": "https://example.com/images/the_hobbit.jpg",
        "publishYear": 1937
    },
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "description": "The first book in the Harry Potter series, which follows a young wizard's adventures at Hogwarts.",
        "genre": "Fantasy",
        "price": 14.99,
        "img": "https://example.com/images/harry_potter_1.jpg",
        "publishYear": 1997
    },
    {
        "title": "The Da Vinci Code",
        "author": "Dan Brown",
        "description": "A mystery thriller that follows symbologist Robert Langdon as he investigates a murder at the Louvre Museum.",
        "genre": "Thriller",
        "price": 10.99,
        "img": "https://example.com/images/da_vinci_code.jpg",
        "publishYear": 2003
    },
    {
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "description": "A novel about a young shepherd's journey to find his personal legend and fulfill his dreams.",
        "genre": "Adventure",
        "price": 8.99,
        "img": "https://example.com/images/the_alchemist.jpg",
        "publishYear": 1988
    },
    {
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "description": "A dystopian novel set in a future where children are selected to participate in a televised death match.",
        "genre": "Dystopian",
        "price": 9.99,
        "img": "https://example.com/images/the_hunger_games.jpg",
        "publishYear": 2008
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "description": "A dystopian novel that explores the consequences of a technologically advanced society that prioritizes efficiency and pleasure.",
        "genre": "Dystopian",
        "price": 7.99,
        "img": "https://example.com/images/brave_new_world.jpg",
        "publishYear": 1932
    },
    {
        "title": "The Road",
        "author": "Cormac McCarthy",
        "description": "A post-apocalyptic novel that follows a father and son as they travel through a desolate landscape.",
        "genre": "Post-Apocalyptic",
        "price": 11.99,
        "img": "https://example.com/images/the_road.jpg",
        "publishYear": 2006
    },
    {
        "title": "The Girl with the Dragon Tattoo",
        "author": "Stieg Larsson",
        "description": "A mystery thriller that follows journalist Mikael Blomkvist and hacker Lisbeth Salander as they investigate a disappearance.",
        "genre": "Mystery",
        "price": 9.99,
        "img": "https://example.com/images/dragon_tattoo.jpg",
        "publishYear": 2005
    },
    {
        "title": "Gone Girl",
        "author": "Gillian Flynn",
        "description": "A psychological thriller that explores the complexities of marriage and the secrets that can lie within it.",
        "genre": "Thriller",
        "price": 8.99,
        "img": "https://example.com/images/gone_girl.jpg",
        "publishYear": 2012
    },
    {
        "title": "The Fault in Our Stars",
        "author": "John Green",
        "description": "A novel about two teenagers who fall in love after meeting at a cancer support group.",
        "genre": "Romance",
        "price": 7.99,
        "img": "https://example.com/images/fault_in_our_stars.jpg",
        "publishYear": 2012
    },
    {
        "title": "The Shining",
        "author": "Stephen King",
        "description": "A horror novel about a family staying at an isolated hotel that harbors a malevolent presence.",
        "genre": "Horror",
        "price": 10.99,
        "img": "https://example.com/images/the_shining.jpg",
        "publishYear": 1977
    },
    {
        "title": "The Martian",
        "author": "Andy Weir",
        "description": "A science fiction novel about an astronaut stranded on Mars and his efforts to survive.",
        "genre": "Science Fiction",
        "price": 9.99,
        "img": "https://example.com/images/the_martian.jpg",
        "publishYear": 2011
    },
    {
        "title": "The Book Thief",
        "author": "Markus Zusak",
        "description": "A historical novel set in Nazi Germany, narrated by Death and centered on a young girl who steals books.",
        "genre": "Historical",
        "price": 8.99,
        "img": "https://example.com/images/the_book_thief.jpg",
        "publishYear": 2005
    },
    {
        "title": "The Silent Patient",
        "author": "Alex Michaelides",
        "description": "A psychological thriller about a woman who stops speaking after committing a murder and the therapist who tries to uncover her story.",
        "genre": "Thriller",
        "price": 12.99,
        "img": "https://example.com/images/the_silent_patient.jpg",
        "publishYear": 2019
    },
    {
        "title": "Where the Crawdads Sing",
        "author": "Delia Owens",
        "description": "A novel that intertwines a coming-of-age story and a murder mystery set in the marshes of North Carolina.",
        "genre": "Mystery",
        "price": 14.99,
        "img": "https://example.com/images/where_the_crawdads_sing.jpg",
        "publishYear": 2018
    }
];

module.exports = books;