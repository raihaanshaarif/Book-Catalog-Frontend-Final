import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../../Redux/book/bookApi";
import CommentCard from "../../Components/CommentCard";

const BookDetail = () => {
  const { id } = useParams();
  const { data } = useGetBookByIdQuery(id);

  return (
    <div className="container mx-auto mt-[100px]">
      <div className="md:flex md:justify-center md:items-center ">
        <div className="md:mx-20">
          <img
            className="rounded-xl md:w-10/12"
            src={data?.data?.image}
            alt=""
          />
        </div>
        <div className="md:mx-20">
          <div className="text-center my-10">
            <h2 className="text-xl md:text-4xl text-blue-600 ">
              Title: {data?.data?.title}
            </h2>
            <h2 className="md:text-xl ">Author: {data?.data?.author}</h2>
            <h2 className="md:text-xl ">Genre: {data?.data?.genre}</h2>
            <h2 className="md:text-xl ">
              Publication Date: {data?.data?.publicationDate}
            </h2>
          </div>
        </div>
      </div>
      <CommentCard />
    </div>
  );
};

export default BookDetail;
