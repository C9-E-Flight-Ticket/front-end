import api from "@/app/api";

export const flightApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTicketByContinent: build.query({
      query: ({ continent, limit, offset }) => ({
        url: `/api/flight/search?arrivalContinent=${continent}&limit=${limit}&offset=${offset}&homepage=true`,
        method: "GET",
      }),
    }),
    getTicketBySearching: build.query({
      query: ({
        departureCity,
        arrivalCity,
        departureDate,
        returnDate,
        seatClass,
        limit,
        offset,
      }) => ({
        url: `/api/flight/search?departureCity=${departureCity}&arrivalCity=${arrivalCity}&departureDate=${departureDate}&returnDate=${returnDate}&seatClass=${seatClass}&limit=${limit}&offset=${offset}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTicketByContinentQuery } = flightApi;
