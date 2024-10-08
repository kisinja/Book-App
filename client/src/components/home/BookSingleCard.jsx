import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiShow, BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';
import PropTypes from 'prop-types';


const BookSingleCard = ({ item }) => {

    const [showModal, setShowModal] = useState(false);


    return (
        <div className="rounded-lg px-4 py-2 m-4 relative shadow-xl w-[250px] bg-transparent backdrop-blur-[15px]" key={item._id} id='card-book'>
            <h2 className="absolute top-1 right-2 px-4 py-1 bg-red 300 rounded-lg text-red-700 font-semibold bg-black">{item.publishYear}</h2>

            <img src={item.img} alt={item.title} className="w-full h-[200px] object-cover rounded-lg" />
            <div className="flex justify-start items-center gap-x-2">
                <PiBookOpenTextLight className='text-red-300 text-2xl' />
                <h2 className="my-1">{item.title}</h2>
            </div>

            <div className="flex justify-start items-center gap-x-2">
                <BiUserCircle className='text-red-300 text-2xl' />
                <h2 className="my-1">{item.author}</h2>
            </div>

            <div className="flex justify-between items-center gap-x-2 mt-4 p-4">

                <BiShow
                    className='text-3xl text-blue-800 hover:text-black cursor-pointer'
                    onClick={() => setShowModal(true)}
                />

                <Link to={`/books/details/${item._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
                </Link>
                <Link to={`/books/edit/${item._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                </Link>
                <Link to={`/books/delete/${item._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                </Link>
            </div>
            {showModal && (
                <BookModal book={item} onClose={() => setShowModal(false)} />
            )}
        </div>
    );
};

BookSingleCard.propTypes = {
    item: PropTypes.object.isRequired
};

BookSingleCard.defaultProps = {
    item: {}
};

export default BookSingleCard;