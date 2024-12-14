import api from "@/app/api";
import Cookies from "js-cookie";

export const detailFlightApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDetailFlight: build.query({
      query: ({ flightId, seatClass, adult, child, baby }) => {
        // send headers authorization to fetch protected API in development
        const headers = {};
        if (import.meta.env.VITE_NODE_ENV !== "production") {
          headers.Authorization = `Bearer ${Cookies.get("access_token")}`;
        }
        return {
          url: `/api/seat/detail-flight?flightId=${flightId[0]}&seatClass=${seatClass}&adult=${adult}&child=${child}&baby=${baby}`,
          method: "GET",
          headers,
        };
      },
    }),
    getDetailFlightWithReturn: build.query({
      query: ({ flightId, seatClass, adult, child, baby }) => {
        // send headers authorization to fetch protected API in development
        const headers = {};
        if (import.meta.env.VITE_NODE_ENV !== "production") {
          headers.Authorization = `Bearer ${Cookies.get("access_token")}`;
        }
        return {
          url: `/api/seat/detail-flight?flightId=${flightId[0]}&flightId=${flightId[1]}&seatClass=${seatClass}&adult=${adult}&child=${child}&baby=${baby}`,
          method: "GET",
          headers,
        };
      },
    }),
  }),
});

export const { useGetDetailFlightQuery, useGetDetailFlightWithReturnQuery } =
  detailFlightApi;
