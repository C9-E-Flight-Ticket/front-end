import Cookies from "js-cookie";
import api from "@/app/api";

export const accountApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllNotifications: build.query({
      query: (userId) => {
        const headers = {};
        if (import.meta.env.VITE_NODE_ENV !== "production") {
          headers.Authorization = `Bearer ${Cookies.get("access_token")}`;
        }
        return { url: `/api/notifications?userId=${userId}`, method: "GET" };
      },
    }),
    markNotificationAsRead: build.mutation({
      query: (notificationId) => {
        const headers = {};
        if (import.meta.env.VITE_NODE_ENV !== "production") {
          headers.Authorization = `Bearer ${Cookies.get("access_token")}`;
        }
        return {
          url: `/api/notifications/${notificationId}/read`,
          method: "PATCH",
        };
      },
    }),
    getUserProfile: build.query({
      query: () => {
        const headers = {};
        if (import.meta.env.VITE_NODE_ENV !== "production") {
          headers.Authorization = `Bearer ${Cookies.get("access_token")}`;
        }
        return { url: `/api/profile/:id`, method: "GET" };
      },
    }),
    updateUserProfile: build.mutation({
      query: ({ name, email, phoneNumber }) => {
        const headers = {};
        if (import.meta.env.VITE_NODE_ENV !== "production") {
          headers.Authorization = `Bearer ${Cookies.get("access_token")}`;
        }
        return {
          url: `/api/profile/:id`,
          method: "PUT",
          body: { name, email, phoneNumber },
        };
      },
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useGetAllNotificationsQuery,
  useMarkNotificationAsReadMutation,
  useUpdateUserProfileMutation,
} = accountApi;
