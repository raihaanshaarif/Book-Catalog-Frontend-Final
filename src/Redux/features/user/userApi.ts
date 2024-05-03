import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: ({ data }) => ({
        url: `/users/create-user`,
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: ({ data }) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = userApi;
