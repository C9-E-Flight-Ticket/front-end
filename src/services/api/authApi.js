import api from "@/app/api";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: `/api/auth/login`,
        method: "POST",
        credentials: "include",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
