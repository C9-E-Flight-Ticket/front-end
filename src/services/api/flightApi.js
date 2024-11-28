import api from "@/app/api";

export const flightApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTicketByContinent: build.query({
      query: ({ continent, limit, offset }) => ({
        url: `/api/flight/search?arrivalContinent=${continent}&limit=${limit}&offset=${offset}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTicketByContinentQuery } = flightApi;
