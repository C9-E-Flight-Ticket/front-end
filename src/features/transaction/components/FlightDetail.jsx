import FlightDetailData from "@/features/transaction/components/FlightDetailData";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useGetDetailFlightQuery } from "@/services/api/flightApi";

const FlightDetail = ({ bookingCode = "" }) => {
  const [activeTab, setActiveTab] = React.useState("pergi");
  const { passengers, seatClass, isReturnToggleActive } = useSelector(
    (state) => state.homepage
  );
  const { departureFlightId, returnFlightId } = useSelector(
    (state) => state.flight
  );
  const { data, isLoading } = useGetDetailFlightQuery({
    flightId: isReturnToggleActive
      ? [departureFlightId, returnFlightId]
      : [departureFlightId],
    seatClass: seatClass,
    adult: passengers.adult,
    child: passengers.child,
    baby: passengers.baby,
  });

  const dataTicket = data?.payload?.data;

  const timeHandle = (time, type) => {
    const newTime = new Date(time);

    if (type === "date") {
      return newTime.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    }
    if (type === "hour") {
      return newTime.toLocaleString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  };

  const flight = [
    {
      label: "Pergi",
      value: "pergi",
      desc: (
        <FlightDetailData
          departureHour={timeHandle(
            dataTicket?.flights?.[0]?.seats?.[0]?.flight?.departureTime,
            "hour"
          )}
          departureDate={timeHandle(
            dataTicket?.flights?.[0]?.seats?.[0]?.flight?.departureTime,
            "date"
          )}
          departureGate={
            dataTicket?.flights?.[0]?.seats?.[0]?.flight?.departureAirport?.name
          }
          arrivalHour={timeHandle(
            dataTicket?.flights?.[0]?.seats?.[0]?.flight?.arrivalTime,
            "hour"
          )}
          arrivalDate={timeHandle(
            dataTicket?.flights?.[0]?.seats?.[0]?.flight?.arrivalTime,
            "date"
          )}
          arrivalGate={
            dataTicket?.flights?.[0]?.seats?.[0]?.flight?.arrivalAirport?.name
          }
          entertaiment={
            dataTicket?.flights[0]?.seats[0]?.flight?.airline?.entertainment
          }
          baggage={dataTicket?.flights[0]?.seats[0]?.flight?.airline?.baggage}
          cabinBaggage={
            dataTicket?.flights[0]?.seats[0]?.flight?.airline?.cabinBaggage
          }
          airLineImg={
            dataTicket?.flights[0]?.seats[0]?.flight?.airline?.urlImage
          }
          airLine={dataTicket?.flights[0]?.seats[0]?.flight?.airline?.name}
          flightNumber={dataTicket?.flights[0]?.seats[0]?.flight?.flightNumber}
          seatClass={dataTicket?.flights[0]?.seats[0]?.seatClass}
          adultPrice={dataTicket?.pricesByFlight[0]?.subTotalPrice.adult}
          childrenPrice={dataTicket?.pricesByFlight[0]?.subTotalPrice?.child}
          tax={dataTicket?.pricesByFlight[0]?.tax}
          total={dataTicket?.pricesByFlight[0]?.total}
          loading={isLoading}
        />
      ),
    },
    ...(isReturnToggleActive
      ? [
          {
            label: "Pulang",
            value: "Pulang",
            desc: (
              <FlightDetailData
                departureHour={timeHandle(
                  dataTicket?.flights?.[1]?.seats?.[0]?.flight?.departureTime,
                  "hour"
                )}
                departureDate={timeHandle(
                  dataTicket?.flights?.[1]?.seats?.[0]?.flight?.departureTime,
                  "date"
                )}
                departureGate={
                  dataTicket?.flights?.[1]?.seats?.[0]?.flight?.departureAirport
                    ?.name
                }
                arrivalHour={timeHandle(
                  dataTicket?.flights?.[1]?.seats?.[0]?.flight?.arrivalTime,
                  "hour"
                )}
                arrivalDate={timeHandle(
                  dataTicket?.flights?.[1]?.seats?.[0]?.flight?.arrivalTime,
                  "date"
                )}
                arrivalGate={
                  dataTicket?.flights?.[1]?.seats?.[0]?.flight?.arrivalAirport
                    ?.name
                }
                entertaiment={
                  dataTicket?.flights?.[1]?.seats[0]?.flight?.airline
                    ?.entertainment
                }
                baggage={
                  dataTicket?.flights?.[1]?.seats[0]?.flight?.airline?.baggage
                }
                cabinBaggage={
                  dataTicket?.flights?.[1]?.seats[0]?.flight?.airline
                    ?.cabinBaggage
                }
                airLineImg={
                  dataTicket?.flights?.[1]?.seats[0]?.flight?.airline?.urlImage
                }
                airLine={
                  dataTicket?.flights?.[1]?.seats[0]?.flight?.airline?.name
                }
                flightNumber={
                  dataTicket?.flights?.[1]?.seats[0]?.flight?.flightNumber
                }
                seatClass={dataTicket?.flights?.[1]?.seats[0]?.seatClass}
                adultPrice={
                  dataTicket?.pricesByFlight?.[1]?.subTotalPrice.adult
                }
                childrenPrice={
                  dataTicket?.pricesByFlight?.[1]?.subTotalPrice?.child
                }
                tax={dataTicket?.pricesByFlight?.[1]?.tax}
                total={dataTicket?.pricesByFlight?.[1]?.total}
                loading={isLoading}
              />
            ),
          },
        ]
      : []),
  ];
  return (
    <>
      <h2 className="pl-2 md:pl-0 text-base lg:text-lg font-bold text-black mb-4">
        {bookingCode ? (
          <>
            Booking Code:{" "}
            <span className="text-primaryPurple">{bookingCode}</span>
          </>
        ) : (
          "Detail Penerbangan"
        )}
      </h2>
      <Tabs value={activeTab}>
        {isReturnToggleActive && (
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
            }}
          >
            {flight.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "text-gray-900" : ""}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
        )}

        <TabsBody>
          {flight.map(({ value, desc }) => (
            <TabPanel className="text-black" key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
};

export default FlightDetail;
