import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import PropTypes from 'prop-types';

const BookModal = ({ book, onClose }) => {
    return (
        <div className='fixed bg-white bg-opacity-60 top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()} className='w-[600px] max-w-full h-fit bg-white rounded-xl p-4 flex flex-col relative'>
                <AiOutlineClose
                    className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                    onClick={onClose}
                />
                <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
                    {book.publishYear}
                </h2>
                <h4 className='my-2 text-gray-500'>{book._id}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='my-1 text-gray-500'>{book.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className='my-1 text-gray-500'>{book.author}</h2>
                </div>
                <p className='mt-4 text-gray-500'> <span className="text-gray-700 font-semibold mt-3">Price:</span> ${book.price}</p>
                <p className="text-gray-700 font-semibold mt-3">Description</p>
                <p className='my-1 text-gray-500'>
                    {book.description}
                </p>

                <div className="flex w-full justify-between items-center mt-5">
                    <button className='bg-green-300 text-white px-4 py-1 rounded hover:bg-green-500'>Buy</button>
                    <button className='bg-yellow-300 text-white px-4 py-1 rounded hover:bg-yellow-500'>Borrow</button>
                </div>
            </div>
        </div>
    );
};

BookModal.propTypes = {
    book: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
};

export default BookModal
