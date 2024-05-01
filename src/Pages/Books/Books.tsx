import { useState } from "react";
import Book from "../../Components/Book";
import { useGetBooksQuery } from "../../Redux/book/bookApi";
import { IBook } from "../../Types/globalTypes";

import { useDispatch } from "react-redux";
import { searchedText } from "../../Redux/book/bookSlice";

// type FilterType = {
//   searchByTitle?: string;
//   searchByAuthor?: string;
//   searchByGenre?: string;
// };

const Books = () => {
  const dispatch = useDispatch();
  //Get Books from API
  const { data } = useGetBooksQuery(undefined);

  // Get Search By Name Input Value
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Do something with searchValue, such as passing it to a search function
    console.log("Search value:", searchValue);
    dispatch(searchedText(searchValue));
  };

  // Find and Get FIltered Data's from data

  const filterBooksByTitle = (books: IBook[] | undefined, title: string) => {
    if (!books || !Array.isArray(books)) {
      console.error("Invalid or missing books data");
      return [];
    }
    if (!title) {
      return books;
    }
    return books.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  };
  const filteredData = data?.data
    ? filterBooksByTitle(data.data, searchValue)
    : [];

  console.log(filteredData);

  return (
    <div className="container mx-auto mt-[100px] border-b-2">
      <div className="grid grid-cols-12">
        <div className=" col-span-2 border-r-2">
          <div className="mr-2">
            <div></div>
            <div>
              <form
                className=" flex flex-col"
                // onSubmit={handleSubmit(onSubmit)}
              >
                {/* Use shouldUnregister option with register */}

                <label>Author</label>
                <input
                  className="border-2 rounded "
                  // {...register("searchByAuthor", { shouldUnregister: true })}
                />
                <label>Genre</label>
                <input
                  className="border-2 rounded "
                  // {...register("searchByGenre", { shouldUnregister: true })}
                />
                <button
                  className="bg-blue-600 rounded text-white hover:bg-blue-400 mt-2"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-10">
          <div className="">
            <section className=" " id="contact">
              <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-15">
                <div className="mb-4">
                  <div className=" max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                    <p className="text-base font-semibold uppercase tracking-wide text-blue-600 ">
                      All Books
                    </p>
                    <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
                      Recently Added Books
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                      Escaping reality, one book at a time
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className=" flex justify-center items-center mb-5">
                <form onSubmit={handleSubmit}>
                  <input
                    className="border rounded w-[500px] py-3 indent-6"
                    type="text"
                    value={searchValue}
                    onChange={handleChange}
                    placeholder="Search by title"
                  />
                  {/* <button type="submit">Search</button> */}
                </form>
              </div>
            </section>
            <div className="flex gap-6">
              <div className="flex  gap-5 justify-center items-center   rounded  flex-wrap basis-4/4">
                {filteredData?.map((book: IBook, index: number) => (
                  <Book key={index} book={book} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
