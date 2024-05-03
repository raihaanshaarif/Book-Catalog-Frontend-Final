import { useEffect, useState } from "react";
import {
  useDeleteWishlistMutation,
  useGetAllWishlistQuery,
} from "../../Redux/features/wishlist/wishlistApi";
import toast from "react-hot-toast";
import { useAppSelector } from "../../Redux/hooks";
import { RootState } from "../../Redux/store";
import { IWishlist } from "../../Types/globalTypes";

const Wishlist = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const { _id: id } = user || {}; //

  const { data: wishlistData } = useGetAllWishlistQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const [isDeleting, setIsDeleting] = useState(false);

  const [deleteWishlist, { data: resData, isSuccess, isError }] =
    useDeleteWishlistMutation();

  const handleRemoveWishlist = async (id: string) => {
    setIsDeleting(true);
    try {
      await deleteWishlist(id);
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
                ALL WISHLIST
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
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {wishlistData?.data?.map((wish: IWishlist, index: number) => (
              <tr key={index}>
                <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
                  {wish?.book.title}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                  {wish.book.author}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                  {wish.book.genre}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                  {wish.book.publicationDate}
                </td>
                <td className="whitespace-nowrap px-4 text-center py-2">
                  <button
                    onClick={() => handleRemoveWishlist(wish._id)}
                    disabled={isDeleting}
                    className={`inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 ${
                      isDeleting && "opacity-50 cursor-not-allowed"
                    }`}
                  >
                    {isDeleting ? "Deleting..." : "Delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
