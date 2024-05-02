import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postBook: builder.mutation({
      query: ({ data }) => ({
        url: `/book/create-book`,
        method: "POST",
        body: data,
      }),
    }),
    getBooks: builder.query({
      query: () => `/book`,
    }),
    getBookById: builder.query({
      query: (id) => `/book/${id}`,
    }),
    patchBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: "PATCH",
        body: { id, data },
      }),
    }),
    getComments: builder.query({
      query: (id) => `/book/comment/${id}`,
      providesTags: ["comment"],
    }),
    postComments: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  usePatchBookMutation,
  useGetCommentsQuery,
  usePostCommentsMutation,
  usePostBookMutation,
} = bookApi;
