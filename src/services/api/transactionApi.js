import Cookies from "js-cookie";
import api from "@/app/api";

export const transactionApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllUserTransactions: build.query({
      query: () => {
        const headers = {};
        if (import.meta.env.VITE_NODE_ENV !== "production") {
          headers.Authorization = `Bearer ${Cookies.get("access_token")}`;
        }
        return { url: `/api/transaction/transactions`, method: "GET" };
      },
    }),
    getTransactionByBookingCode: build.query({
      query: (bookingCode) => {
        const headers = {};
        if (import.meta.env.VITE_NODE_ENV !== "production") {
          headers.Authorization = `Bearer ${Cookies.get("access_token")}`;
        }
        return { url: `/api/transaction/status/${bookingCode}`, method: "GET" };
      },
    }),
    createTransaction: build.mutation({
      query: (payload) => {
        const headers = {};
        if (import.meta.env.VITE_NODE_ENV !== "production") {
          headers.Authorization = `Bearer ${Cookies.get("access_token")}`;
        }
        return { url: `/api/transaction/order`, method: "POST", body: payload };
      },
    }),
    generatePDF: build.query({
      query: (bookingCode) => {
        const headers = {};
        if (import.meta.env.VITE_NODE_ENV !== "production") {
          headers.Authorization = `Bearer ${Cookies.get("access_token")}`;
        }
        return {
          url: `/api/transaction/generate-pdf/${bookingCode}`,
          method: "GET",
        };
      },
    }),
    downloadPDF: build.query({
      query: (bookingCode) => {
        const headers = {};
        if (import.meta.env.VITE_NODE_ENV !== "production") {
          headers.Authorization = `Bearer ${Cookies.get("access_token")}`;
        }
        return {
          url: `/api/transaction/download/${bookingCode}.pdf`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllUserTransactionsQuery } = transactionApi;
