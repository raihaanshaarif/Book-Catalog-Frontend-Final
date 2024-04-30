import { FaUser, FaMasksTheater } from "react-icons/fa6";
import { IBook } from "../Types/globalTypes";
import { Link } from "react-router-dom";
interface IProps {
  book: IBook;
}
const Book = ({ book }: IProps) => {
  return (
    <div className="bg-white  rounded-lg shadow-lg overflow-hidden max-w-lg hover:shadow-2xl">
      <Link to={`/bookdetail/${book._id}`}>
        <img
          src={book.image}
          alt="Mountain"
          className="w-full h-64 object-fit"
        />
      </Link>

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2 w-full">{book.title}</h2>
        {/* <p className="text-gray-700 leading-tight mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      eu sapien porttitor, blandit velit ac, vehicula elit. Nunc et ex
      at turpis rutrum viverra.
    </p> */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaUser className="w-6 h-6 rounded-full mr-2 object-cover" />
            <span className="text-gray-800 ">{book.author}</span>
          </div>
          
        </div>
      </div>
      <div className="flex mr-2 justify-between items-center">
        <div className="flex items-center">
              <FaMasksTheater className="w-6 h-6 rounded-full  object-cover" />
              <span className="text-gray-800 font-semibold ">{book.genre}</span>
        </div>
      </div>
      <div className="flex items-center text-center justify-between bg-blue-400 mt-2 w-full ">
        {/* <FaRegClock className="mr-5" /> */}
        <span className="text-white px-3 ">Publish Date:</span>
        <span className="text-white px-3">{book.publicationDate}</span>
      </div>
    </div>
  );
};

export default Book;
