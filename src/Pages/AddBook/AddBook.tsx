import { useForm } from "react-hook-form";
import { useAppSelector } from "../../Redux/hooks";
import { RootState } from "../../Redux/store";
import { usePostBookMutation } from "../../Redux/book/bookApi";
import { useEffect } from "react";
import toast from "react-hot-toast";

type AddBookData = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  createdBy: string;
};

const AddBook = () => {
  // Get User to put in created by
  const user = useAppSelector((state: RootState) => state.auth.user);
  //   console.log(id);
  // Post Book Mutation to Post Book
  const [postBook, { data, isSuccess, isError }] = usePostBookMutation();

  const { register, handleSubmit } = useForm<AddBookData>();
  const onSubmit = handleSubmit((data) => {
    const createdBy = user?._id;
    const { title, author, genre, publicationDate, image } = data;

    // console.log(newData);

    const options = {
      data: {
        title: title,
        author: author,
        genre: genre,
        publicationDate: publicationDate,
        image: image,
        createdBy: createdBy,
      },
    };
    if (user?._id) {
      postBook(options);
    }
  });

  useEffect(() => {
    if (isError) {
      toast.error(data.message);
    }
    if (isSuccess) {
      toast.success(data.message);
    }
  }, [isSuccess, isError]);
  // firstName and lastName will have correct type

  //   // Function to reset form values
  //   const resetForm = () => {
  //     setValue("title", "");
  //     setValue("author", "");
  //     setValue("genre", "");
  //     setValue("publicationDate", "");
  //     setValue("image", "");
  //     setValue("createdBy", "");
  //   };

  return (
    <div className="container mx-auto mt-[100px]">
      <section className=" " id="contact">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-15">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-blue-600 ">
                All Books
              </p>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
                Add Book
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                Quote of the day: Escaping reality, one book at a time
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="">
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
  );
};

export default AddBook;
