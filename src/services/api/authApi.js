import api from "@/app/api";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: `/api/auth/login`,
        method: "POST",
        body: credentials,
      }),
    }),
    register: build.mutation({
      query: (credentials) => ({
        url: `/api/auth/register`,
        method: "POST",
        body: credentials,
      }),
    }),
    verifyEmail: build.mutation({
      query: ({ userId, otp }) => ({
        url: `/api/auth/verify-email/${userId}`,
        method: "POST",
        body: { otp },
      }),
    }),
    resendOTP: build.mutation({
      query: (userId) => ({
        url: `/api/auth/resend-otp/${userId}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useResendOTPMutation,
  useVerifyEmailMutation,
} = authApi;
