import api from "@/app/api";

export const ticketApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllTickets: build.query({
      // Nama endpoint sesuai dengan nama hook
      query: () => ({ url: `/api/ticket`, method: "GET" }),
    }),
  }),
});

// Menggunakan nama yang sama dengan query yang telah didefinisikan
export const { useGetAllTicketsQuery } = ticketApi;
