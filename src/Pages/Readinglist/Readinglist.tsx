import { useEffect, useState } from "react";
import { useAppSelector } from "../../Redux/hooks";
import { RootState } from "../../Redux/store";
import {
  useDeleteReadinglistMutation,
  useGetAllReadinglistQuery,
  useUpdateReadinglistMutation,
} from "../../Redux/features/readinglist/readinglistApi";
import toast from "react-hot-toast";
import { IReadinglist } from "../../Types/globalTypes";

const Readinglist = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const { _id: id } = user || {}; //

  const { data: readinglistData } = useGetAllReadinglistQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  //   console.log(readinglistData);
  // Handle readinglist Status pending or not Start
  const [isPedning, setIsPending] = useState(false);
  console.log(isPedning);
  const [
    updateReadinglist,
    { data: updateData, isSuccess: updateIsSuccess, isError: updateIsError },
  ] = useUpdateReadinglistMutation();

  const handleReadStatus = async (id: string) => {
    const options = await {
      id: id,
      data: {
        isCompleted: true,
      },
    };
    console.log(options);
    try {
      await updateReadinglist(options);
      setIsPending(true);
    } catch (error) {
      console.error("Error updating reading status:", error);
    }
  };
  useEffect(() => {
    if (updateIsError) {
      toast.error(updateData?.message);
    }
    if (updateIsSuccess) {
      toast.success(updateData?.message);
      setIsPending(true);
    }
  }, [updateIsSuccess, updateIsError, updateData]);

  // Handle readinglist Status pending or not End

  // Handle Delete Start
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteReadinglist, { data: resData, isSuccess, isError }] =
    useDeleteReadinglistMutation();

  const handleRemoveReadinglist = async (id: string) => {
    setIsDeleting(true);
    try {
      await deleteReadinglist(id);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(resData?.message);
    }
    if (isSuccess) {
      toast.success(resData?.message);
    }
  }, [isSuccess, isError, resData]);
  // Handle Delete End

  if (!user) {
    return <div>Loading...</div>; // Handle the case where user is not available
  }
  return (
    <div className="container mx-auto mt-[100px]">
      <section className=" " id="contact">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-15">
          <div className="mb-4">
            <div className=" max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-blue-600 "></p>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
                ALL READING LIST
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                Escaping reality, one book at a time
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Title
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Author
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Genre
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Publication Date
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Reading Status
              </th>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {readinglistData?.data?.map(
              (reading: IReadinglist, index: number) => (
                <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
                    {reading?.book.title}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                    {reading.book.author}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                    {reading.book.genre}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                    {reading.book.publicationDate}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                    {reading.isCompleted ? "Completed" : "Pending"}
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2">
                    <button
                      onClick={() => handleReadStatus(reading._id)}
                      disabled={isDeleting}
                      className={`inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 ${
                        isDeleting && "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      Mark Completed
                    </button>
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2">
                    <button
                      onClick={() => handleRemoveReadinglist(reading._id)}
                      disabled={isDeleting}
                      className={`inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 ${
                        isDeleting && "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      {isDeleting ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Readinglist;
