import { useForm } from "react-hook-form";
import {
  useGetBookByIdQuery,
  usePatchBookMutation,
} from "../../Redux/features/book/bookApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

type PatchBookData = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  createdBy?: string;
};

const EditBook = () => {
  //Get Book Data
  const { id } = useParams();
  const { data: bookData } = useGetBookByIdQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  // Load Mutation for Patch
  const [patchBook, { data, isSuccess, isError }] = usePatchBookMutation();

  const { register, handleSubmit, reset } = useForm<PatchBookData>();

  // Use Effect to Set Default Data
  useEffect(() => {
    if (bookData && bookData.data) {
      reset({
        title: bookData.data.title,
        author: bookData.data.author,
        genre: bookData.data.genre,
        publicationDate: bookData.data.publicationDate,
        image: bookData.data.image,
      });
    }
  }, [bookData, reset]);

  const onSubmit = handleSubmit((data) => {
    const { title, author, genre, publicationDate, image } = data;
    // console.log(newData);
    const options = {
      id: id,
      data: {
        title: title,
        author: author,
        genre: genre,
        publicationDate: publicationDate,
        image: image,
      },
    };
    // console.log(options);
    patchBook(options);
  });

  useEffect(() => {
    if (isError) {
      toast.error(data.message);
    }
    if (isSuccess) {
      toast.success(data.message);
    }
  }, [isSuccess, isError]);

  return (
    <div>
      <div>
        <div></div>
        <div className="container mx-auto mt-[100px]">
          <form className="flex flex-col max-w-2xl mx-auto" onSubmit={onSubmit}>
            <label>Book Title</label>
            <input
              className="border border-blue-400 rounded mb-2"
              {...register("title")}
            />
            <label>Author</label>
            <input
              className="border border-blue-400 rounded mb-2"
              {...register("author")}
            />
            <label>Genre</label>
            <input
              className="border border-blue-400 rounded mb-2"
              {...register("genre")}
            />
            <label>Publication Date</label>
            <input
              className="border border-blue-400 rounded mb-2"
              {...register("publicationDate")}
            />
            <label>Image</label>
            <input
              className="border border-blue-400 rounded mb-2"
              {...register("image")}
            />

            <button
              type="submit"
              className="bg-blue-600 px-5 py-2 text-white rounded hover:bg-blue-400"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
