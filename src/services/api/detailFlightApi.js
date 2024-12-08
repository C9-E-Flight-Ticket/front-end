import api from "@/app/api";

export const detailFlightApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDetailFlight: build.query({
      query: ({ flightId, seatClass, adult, child, baby }) => ({
        url: `/api/seat/detail-flight?flightId=${flightId[0]}&seatClass=${seatClass}&adult=${adult}&child=${child}&baby=${baby}`,
        method: "GET",
      }),
    }),
    getDetailFlightWithReturn: build.query({
      query: ({ flightId, seatClass, adult, child, baby }) => ({
        url: `/api/seat/detail-flight?flightId=${flightId[0]}&flightId=${flightId[1]}&seatClass=${seatClass}&adult=${adult}&child=${child}&baby=${baby}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDetailFlightQuery, useGetDetailFlightWithReturnQuery } =
  detailFlightApi;
