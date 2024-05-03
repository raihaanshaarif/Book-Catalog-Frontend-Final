import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetBookByIdQuery,
} from "../../Redux/features/book/bookApi";
import CommentCard from "../../Components/CommentCard";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useAppSelector } from "../../Redux/hooks";
import { RootState } from "../../Redux/store";
import { useAddToWishlistMutation } from "../../Redux/features/wishlist/wishlistApi";
import { useAddToReadinglistMutation } from "../../Redux/features/readinglist/readinglistApi";

const BookDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: bookData } = useGetBookByIdQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const [deleteBook, { data: resData, isSuccess, isError }] =
    useDeleteBookMutation();
  const handleDeleteBook = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (confirmed) {
      deleteBook(id);
    }
  };

  //Get required resources for wish list
  // Get User to put in created by
  const user = useAppSelector((state: RootState) => state.auth.user);
  // AddtoWishlist Mutation to Add Book
  const [
    addToWishlist,
    {
      data: wishlistResData,
      isSuccess: wishlistSuccess,
      isError: wishlistIsError,
    },
  ] = useAddToWishlistMutation();

  const [
    addToReadinglist,
    {
      data: readinglistResData,
      isSuccess: readinglistSuccess,
      isError: readinglistIsError,
    },
  ] = useAddToReadinglistMutation();

  const handleAddToWishlist = async () => {
    const currentUser = user?._id;
    const book = id;

    const options = {
      data: {
        user: currentUser,
        book: book,
      },
    };

    addToWishlist(options);
    // console.log(options);
  };

  const handleAddToReadinglist = async () => {
    const currentUser = user?._id;
    const book = id;

    const options = {
      data: {
        user: currentUser,
        book: book,
        isCompleted: "false",
      },
    };

    addToReadinglist(options);
    console.log(options);
  };

  // User effect for Reading
  useEffect(() => {
    if (readinglistIsError) {
      toast.error("The Book Already exists in the Readinglist");
      // console.log(wishlistResData?.message);
    }
    if (readinglistSuccess) {
      toast.success(readinglistResData?.message);
    }
  }, [readinglistIsError, readinglistResData?.message, readinglistSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(resData?.message);
    }
    if (isSuccess) {
      toast.success(resData?.message);
      navigate("/books");
    }
  }, [isSuccess, isError, navigate, resData]);

  // User effect for Wishlist
  useEffect(() => {
    if (wishlistIsError) {
      toast.error("The Book Already exists in the Wishlist");
      // console.log(wishlistResData?.message);
    }
    if (wishlistSuccess) {
      toast.success(wishlistResData?.message);
    }
  }, [wishlistSuccess, wishlistIsError, wishlistResData]);

  return (
    <div className="container mx-auto mt-[100px]">
      <div className="md:flex md:justify-center md:items-center ">
        <div className="md:mx-20">
          <img
            className="rounded-xl md:w-10/12"
            src={bookData?.data?.image}
            alt=""
          />
        </div>
        <div className="md:mx-20">
          <div className="text-center my-10">
            <h2 className="text-xl md:text-4xl text-blue-600 ">
              Title: {bookData?.data?.title}
            </h2>
            <h2 className="md:text-xl ">Author: {bookData?.data?.author}</h2>
            <h2 className="md:text-xl ">Genre: {bookData?.data?.genre}</h2>
            <h2 className="md:text-xl ">
              Publication Date: {bookData?.data?.publicationDate}
            </h2>
          </div>
          <div className="flex justify-center">
            <Link
              to={`/editbook/${id}`}
              className="bg-blue-600 rounded px-5 py-2 text-white hover:bg-blue-400 mr-2"
            >
              Edit Book
            </Link>
            <button
              onClick={handleDeleteBook}
              className="bg-blue-600 rounded px-5 py-2 text-white hover:bg-blue-400"
            >
              Delete Book
            </button>
          </div>
          <div className="flex justify-center mt-2">
            <button
              onClick={handleAddToWishlist}
              className="bg-blue-600 rounded px-5 py-2 text-white hover:bg-blue-400"
            >
              ADD TO WISSHLIST
            </button>
          </div>
          <div className="flex justify-center mt-2">
            <button
              onClick={handleAddToReadinglist}
              className="bg-blue-600 rounded px-5 py-2 text-white hover:bg-blue-400"
            >
              ADD TO READINGLIST
            </button>
          </div>
        </div>
      </div>
      <CommentCard />
    </div>
  );
};

export default BookDetail;
