import Cookies from "js-cookie";
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
    getDetailFlight: build.query({
      query: ({ flightId, seatClass, adult, child, baby }) => {
        // send headers authorization to fetch protected API in development
        const headers = {};
        if (import.meta.env.VITE_NODE_ENV !== "production") {
          headers.Authorization = `Bearer ${Cookies.get("access_token")}`;
        }

        const url =
          flightId.length < 2
            ? `/api/seat/detail-flight?flightId=${flightId[0]}&seatClass=${seatClass}&adult=${adult}&child=${child}&baby=${baby}`
            : `/api/seat/detail-flight?flightId=${flightId[0]}&flightId=${flightId[1]}&seatClass=${seatClass}&adult=${adult}&child=${child}&baby=${baby}`;

        return {
          url,
          method: "GET",
          headers,
        };
      },
    }),
  }),
});

export const {
  useGetTicketByContinentQuery,
  useGetTicketBySearchingQuery,
  useGetDetailFlightQuery,
} = flightApi;
