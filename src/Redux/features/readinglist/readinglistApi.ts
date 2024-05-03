import { api } from "../../api/apiSlice";

const readinglistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToReadinglist: builder.mutation({
      query: ({ data }) => ({
        url: `/readinglist/add-readinglist`,
        method: "POST",
        body: data,
      }),
    }),
    getAllReadinglist: builder.query({
      query: (id) => `/readinglist/${id}`,
      providesTags: ["readinglist"],
    }),
    updateReadinglist: builder.mutation({
      query: ({ id, data }) => ({
        url: `/readinglist/${id}`,
        body: data,
        method: "PATCH",
      }),
      invalidatesTags: ["readinglist"],
    }),

    deleteReadinglist: builder.mutation({
      query: (id) => ({
        url: `/readinglist/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["readinglist"],
    }),
  }),
});

export const {
  useAddToReadinglistMutation,
  useGetAllReadinglistQuery,
  useUpdateReadinglistMutation,
  useDeleteReadinglistMutation,
} = readinglistApi;
