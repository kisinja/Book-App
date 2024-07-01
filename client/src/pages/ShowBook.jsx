import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";


const ShowBook = () => {

    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const BASE_URL = 'http://localhost:5000/api';

    useEffect(() => {
        setLoading(true);

        axios.get(`${BASE_URL}/books/${id}`)
            .then((response) => {
                setBook(response.data);
                console.log(book);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            })
    }, []);

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4 text-white">Book Details</h1>

            {loading ? (
                <Spinner />
            ) : (
                <>
                    <div className={`flex flex-col rounded-xl w-[550px] p-4 relative mx-auto`} style={{ backgroundImage: `url(${book.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} id="book">



                        {/* <img src={book.img} alt="background image" className="absolute w-[95%] invisible" id="book-image" /> */}
                        <div className="my-4">
                            <span className="text-xl mr-4 text-yellow-400">Id:</span>
                            <span className="text-white">{book._id}</span>
                        </div>

                        <div className="my-4">
                            <span className="text-xl mr-4 text-yellow-400">Title:</span>
                            <span className="text-white">{book.title}</span>
                        </div>
                        <div className="my-4">
                            <span className="text-xl mr-4 text-yellow-400">Author:</span>
                            <span className="text-white">{book.author}</span>
                        </div>
                        <div className="my-4">
                            <span className="text-xl mr-4 text-yellow-400">Genre:</span>
                            <span className="text-white">{book.genre}</span>
                        </div>
                        <div className="my-4">
                            <span className="text-xl mr-4 text-yellow-400">Description:</span>
                            <span className="text-white">{book.description}</span>
                        </div>
                        <div className="my-4">
                            <span className="text-xl mr-4 text-yellow-400">Publish Year:</span>
                            <span className="text-white">{book.publishYear}</span>
                        </div>
                        <div className="my-4">
                            <span className="text-xl mr-4 text-yellow-400">Create Time:</span>
                            <span className="text-white">{new Date(book.createdAt).toString()}</span>
                        </div>
                        <div className="my-4">
                            <span className="text-xl mr-4 text-yellow-400">Last Update Time:</span>
                            <span className="text-white">{new Date(book.updatedAt).toString()}</span>
                        </div>
                        <div className="my-4 flex items-center">
                            <span className="text-xl mr-4 text-yellow-400">Price:</span>
                            <span className="text-black bg-white w-10 h-10 rounded-full flex justify-center items-center font-semibold">${book.price}</span>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                    </div>
                </>
            )
            }
        </div>
    )
}

export default ShowBook
