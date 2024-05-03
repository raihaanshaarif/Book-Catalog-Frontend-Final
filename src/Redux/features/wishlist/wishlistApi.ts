import { api } from "../../api/apiSlice";

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToWishlist: builder.mutation({
      query: ({ data }) => ({
        url: `/wishlist/add-wishlist`,
        method: "POST",
        body: data,
      }),
    }),
    getAllWishlist: builder.query({
      query: (id) => `/wishlist/${id}`,
      providesTags: ["wishlist"],
    }),

    deleteWishlist: builder.mutation({
      query: (id) => ({
        url: `/wishlist/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["wishlist"],
    }),
  }),
});

export const {
  useAddToWishlistMutation,
  useGetAllWishlistQuery,
  useDeleteWishlistMutation,
} = wishlistApi;
