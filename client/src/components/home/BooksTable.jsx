import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';


const BooksTable = ({ books }) => {
    return (
        <table className="w-full border-white rounded-lg">
            <thead>
                <tr>
                    <th className="border border-gray-300 rounded-lg text-orange-400">No</th>
                    <th className="border border-gray-300 rounded-lg text-orange-400">Title</th>
                    <th className="border border-gray-300 rounded-lg max-md:hidden text-orange-400">Author</th>
                    <th className="border border-gray-300 rounded-lg max-md:hidden text-orange-400">Publish Year</th>
                    <th className="border border-gray-300 rounded-lg text-orange-400">Actions</th>
                </tr>
            </thead>

            <tbody>
                {books ? (books.map((book, index) => (
                    <tr key={index} className="h-8">
                        <td className="border border-white rounded-lg text-center text-white">
                            {index + 1}
                        </td>
                        <td className="border border-white rounded-lg text-center text-white">
                            {book.title}
                        </td>
                        <td className="border border-white rounded-lg text-center text-white max-md:hidden">
                            {book.author}
                        </td>
                        <td className="border border-white rounded-lg text-center text-white max-md:hidden">
                            {book.publishYear}
                        </td>
                        <td className="border border-white rounded-lg text-center">
                            <div className="flex justify-center gap-x-4">
                                <Link to={`/books/details/${book._id}`}>
                                    <BsInfoCircle className="text-2xl text-green-600" title="See book" />
                                </Link>
                                <Link to={`/books/edit/${book._id}`}>
                                    <AiOutlineEdit className="text-2xl text-yellow-600" title="Edit Book" />
                                </Link>
                                <Link to={`/books/delete/${book._id}`}>
                                    <MdOutlineDelete className="text-2xl text-red-600" title="Delete Book" />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))) :
                    (<p className="text-white text-3xl text-center">No Books Found</p>)
                }
            </tbody>
        </table>
    )
}

export default BooksTable