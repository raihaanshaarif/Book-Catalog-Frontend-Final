import { useState } from "react";
import Book from "../../Components/Book";
import { useGetBooksQuery } from "../../Redux/features/book/bookApi";
import { IBook } from "../../Types/globalTypes";
import { useDispatch } from "react-redux";
import {
  searchByAuthor,
  searchByGenre,
  searchByTGA,
} from "../../Redux/features/book/bookSlice";

const Books = () => {
  const dispatch = useDispatch();
  //Get Books from API
  const { data } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  // Get Search  Value
  const [searchTGAValue, setsearchTGAValue] = useState("");
  const [searchGenreValue, setSearchGenreValue] = useState("");
  const [searchAuthorValue, setSearchAuthorValue] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearchTGAValue(e.target.value);
  };
  const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchGenreValue(e.target.value);
  };
  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchAuthorValue(e.target.value);
  };

  const handleTitleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Do something with searchValue, such as passing it to a search function
    dispatch(searchByGenre(searchGenreValue));
    dispatch(searchByAuthor(searchAuthorValue));
    dispatch(searchByTGA(searchTGAValue));
  };
  // Find and Get FIltered Data's from data
  // Find and Get Filtered Data from data
  const filterBooks = (
    books: IBook[] | undefined,
    tga: string,
    genre: string,
    author: string
  ) => {
    if (!books || !Array.isArray(books)) {
      console.error("Invalid or missing books data");
      return [];
    }
    return books.filter((book) => {
      const tgaMatch = tga
        ? book.title.toLowerCase().includes(tga.toLowerCase()) ||
          book.genre.toLowerCase().includes(tga.toLowerCase()) ||
          book.author.toLowerCase().includes(tga.toLowerCase())
        : true;

      const genreMatch = genre
        ? book.genre.toLowerCase().includes(genre.toLowerCase())
        : true;
      const authorMatch = author
        ? book.author.toLowerCase().includes(author.toLowerCase())
        : true;

      return tgaMatch && genreMatch && authorMatch;
    });
  };

  const filteredData = data?.data
    ? filterBooks(
        data.data,
        searchTGAValue,
        searchGenreValue,
        searchAuthorValue
      )
    : [];

  return (
    <div className="container mx-auto mt-[100px] border-b-2">
      <div className="grid grid-cols-12">
        <div className=" col-span-2 border-r-2">
          <div className="mr-4">
            <div></div>
            <div>
              <div className="text-center mb-2"> Filter</div>
              <div className=" ">
                <form onSubmit={handleTitleSubmit}>
                  <input
                    className="border rounded py-3 indent-6 w-full mb-2 border-blue-400 focus:border-blue-500"
                    type="text"
                    value={searchGenreValue}
                    onChange={handleGenreChange}
                    placeholder="Search by Genre"
                  />
                  <input
                    className="border rounded py-3 indent-6 w-full mb-2 border-blue-400 focus:border-blue-500"
                    type="text"
                    value={searchAuthorValue}
                    onChange={handleAuthorChange}
                    placeholder="Search by Author"
                  />
                </form>
              </div>
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
                <form onSubmit={handleTitleSubmit}>
                  <input
                    className="border rounded w-[500px] py-3 indent-6  border-blue-400 focus:border-blue-500"
                    type="text"
                    value={searchTGAValue}
                    onChange={handleTitleChange}
                    placeholder="Search by title, genre or author"
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
