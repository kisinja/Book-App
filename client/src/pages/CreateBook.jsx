import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from 'notistack';

const CreateBook = () => {

    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [publishYear, setPublishYear] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const BASE_URL = 'http://localhost:5000/api';

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            title,
            author,
            genre,
            description,
            img,
            publishYear,
            price
        };
        setLoading(true);

        axios.post(`${BASE_URL}/books`, data)
            .then((response) => {
                console.log(response.data);
                setLoading(false);
                enqueueSnackbar('Book Created Successfully', { variant: 'success' });
                navigate('/');
            })
            .catch((err) => {
                enqueueSnackbar('Error Occured', { variant: 'error' });
                console.error(err.message);
            })
    };

    return (
        <>



            {loading ? <Spinner /> : ""}
            <div className=" flex flex-col gap-5 w-full pt-[60px] items-center">
                <div className="flex items-center justify-between gap-5 w-full">
                    <BackButton />
                    <h1 className="text-center text-3xl">Create Book</h1>
                </div>
                <form action="" onSubmit={handleSubmit} className="bg-transparent backdrop-blur-[10px] py-2 px-5 w-[600px] flex flex-col gap-5">
                    <div className="mb-3 flex gap-8 items-center">
                        <label>Title: </label>
                        <input type="text" name="" onChange={(e) => setTitle(e.target.value)} value={title} className="bg-transparent border-b-2 border-white text-xl outline-none flex-1" />
                    </div>
                    <div className="mb-3 flex gap-8 items-center">
                        <label>Author: </label>
                        <input type="text" name="" onChange={(e) => setAuthor(e.target.value)} value={author} className="bg-transparent border-b-2 border-white text-xl outline-none flex-1" />
                    </div>
                    <div className="mb-3 flex gap-8 items-center">
                        <label>Genre: </label>
                        <input type="text" name="" onChange={(e) => setGenre(e.target.value)} value={genre} className="bg-transparent border-b-2 border-white text-xl outline-none flex-1" />
                    </div>
                    <div className="mb-3 flex gap-8 items-center">
                        <label>Description: </label>
                        <input type="text" name="" onChange={(e) => setDescription(e.target.value)} value={description} className="bg-transparent border-b-2 border-white text-xl outline-none flex-1" />
                    </div>
                    <div className="mb-3 flex gap-8 items-center">
                        <label>Image Link: </label>
                        <input type="link" name="" onChange={(e) => setImg(e.target.value)} value={img} className="bg-transparent border-b-2 border-white text-xl outline-none flex-1" />
                    </div>
                    <div className="mb-3 flex gap-8 items-center">
                        <label>Publish Year: </label>
                        <input type="number" name="" onChange={(e) => setPublishYear(e.target.value)} value={publishYear} className="bg-transparent border-b-2 border-white text-xl outline-none flex-1" />
                    </div>
                    <div className="mb-3 flex gap-8 items-center">
                        <label>Price: </label>
                        <input type="number" name="" onChange={(e) => setPrice(e.target.value)} value={price} className="bg-transparent border-b-2 border-white text-xl outline-none flex-1" />
                    </div>

                    <div className="flex justify-center items-center">
                        <button type="submit" className="bg-sky-800 text-white rounded-lg py-1 px-4">
                            {loading ? 'Creating ...' : 'Create Book'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateBook
