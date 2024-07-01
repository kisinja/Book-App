import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from 'react-icons/md';
import Spinner from "../components/Spinner";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const [showType, setShowType] = useState('table');

    const BASE_URL = 'http://localhost:5000/api';

    useEffect(() => {
        setLoading(true);

        axios.get(`${BASE_URL}/books`)
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <section className="p-4 w-full" id="homepage">

            <div className="flex justify-center items-center gap-x-4">
                <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => setShowType('table')}>
                    Table
                </button>

                <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => setShowType('card')}>
                    Card
                </button>
            </div>

            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8 text-white">Books
                    <span className="text-sky-800">List</span>
                </h1>
                <Link to="/books/create">
                    <MdOutlineAddBox className="text-4xl text-sky-800 hover:text-white" title="Add Book" />
                </Link>
            </div>

            {loading ? <Spinner /> : showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)}
        </section>
    )
}

export default Home