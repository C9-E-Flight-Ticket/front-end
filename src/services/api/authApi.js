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
    logout: build.mutation({
      query: () => ({
        url: `/api/auth/logout`,
        method: "GET",
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
    requestForgotPasswordByEmail: build.mutation({
      query: (email) => ({
        url: `/api/auth/forgot-password`,
        method: "POST",
        body: { email },
      }),
    }),
    verifyForgotPasswordOTP: build.mutation({
      query: ({ userId, otp }) => ({
        url: `/api/auth/verify-otp/${userId}`,
        method: "POST",
        body: { otp },
      }),
    }),
    resendForgotPasswordOTP: build.mutation({
      query: (userId) => ({
        url: `/api/auth/resend-password-otp/${userId}`,
        method: "POST",
      }),
    }),
    resetPassword: build.mutation({
      query: ({ userId, newPassword, retypePassword }) => ({
        url: `/api/auth/reset-password/${userId}`,
        method: "POST",
        body: { newPassword, retypePassword },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useResendOTPMutation,
  useVerifyEmailMutation,
  useRequestForgotPasswordByEmailMutation,
  useResendForgotPasswordOTPMutation,
  useResetPasswordMutation,
  useVerifyForgotPasswordOTPMutation,
} = authApi;
