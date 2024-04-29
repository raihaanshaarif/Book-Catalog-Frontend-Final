import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/book`,
    }),
    getBookById: builder.query({
      query: (id) => `/book/${id}`,
    }),
    getComments: builder.query({
      query: (id) => `/book/comment/${id}`,
    }),
    postComments: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/comment/${id}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useGetCommentsQuery,
  usePostCommentsMutation,
} = bookApi;
