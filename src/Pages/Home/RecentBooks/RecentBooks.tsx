import Book from "../../../Components/Book";
import { useGetBooksQuery } from "../../../Redux/features/book/bookApi";

import { IBook } from "../../../Types/globalTypes";

const RecentBooks = () => {
  const { data } = useGetBooksQuery(undefined);
  return (
    <div className="container mx-auto ">
      {/* Header */}
      <section className=" " id="contact">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-15">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-blue-600 ">
                Recent Books
              </p>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
                Top Ten Recent Books
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                Escaping reality, one book at a time
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex gap-6">
        <div className="flex  gap-5 justify-center items-center   rounded  flex-wrap basis-4/4">
          {data?.data?.map((book: IBook, index: string) => (
            <Book key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentBooks;
