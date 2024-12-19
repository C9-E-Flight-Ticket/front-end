import { useSelector } from "react-redux";

const FlightDetailData = ({
  departureHour,
  departureDate,
  departureGate,
  arrivalHour,
  arrivalDate,
  arrivalGate,
  entertainment,
  baggage,
  cabinBaggage,
  airLineImg,
  airLine,
  flightNumber,
  seatClass,
  adultPrice,
  childrenPrice,
  tax,
  total,
  loading, // menerima prop loading
}) => {
  const { passengers } = useSelector((state) => state.homepage);

  return (
    <>
      <div
        className={`flex justify-between items-start ${
          loading ? "animate-pulse" : ""
        }`}
      >
        <div>
          <p className="text-sm lg:text-base font-bold">
            {loading ? "..." : departureHour}
          </p>
          <p className="text-xs lg:text-sm text-black">
            {loading ? "..." : departureDate}
          </p>
          <p className="text-xs lg:text-sm text-black">
            {loading ? "..." : departureGate}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs lg:text-sm font-semibold text-lightPurple">
            {loading ? "Loading..." : "Keberangkatan"}
          </p>
        </div>
      </div>

      <div className={`pt-2 mt-4 border-t ${loading ? "animate-pulse" : ""}`}>
        <p className="ml-11 text-sm lg:text-base font-semibold text-black">
          {loading ? "Loading..." : `${airLine} - ${seatClass}`}
        </p>
        <p className="ml-11 text-sm lg:text-base font-bold">
          {loading ? "..." : flightNumber}
        </p>
        <div className="mt-4 flex items-start gap-3">
          {loading ? (
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          ) : (
            <img src={airLineImg} alt="Airline Logo" className="w-8 h-8" />
          )}
          <div>
            <p className="text-sm lg:text-base font-bold">Informasi :</p>
            <p className="text-sm lg:text-base">
              {loading ? "..." : `Baggage ${baggage} kg`}
            </p>
            <p className="text-sm lg:text-base">
              {loading ? "..." : `Cabin baggage ${cabinBaggage} kg`}
            </p>
            <p className="text-sm lg:text-base">
              {loading ? "..." : entertainment}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`pt-2 mt-2 flex border-t justify-between items-start ${
          loading ? "animate-pulse" : ""
        }`}
      >
        <div>
          <p className="text-sm lg:text-base font-bold">
            {loading ? "..." : arrivalHour}
          </p>
          <p className="text-xs lg:text-sm text-black">
            {loading ? "..." : arrivalDate}
          </p>
          <p className="text-xs lg:text-sm text-black">
            {loading ? "..." : arrivalGate}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs lg:text-sm font-semibold text-lightPurple">
            {loading ? "Loading..." : "Kedatangan"}
          </p>
        </div>
      </div>

      <div
        className={`pt-2 mt-2 lg:ml-3 border-t ${
          loading ? "animate-pulse" : ""
        }`}
      >
        <h3 className="text-sm lg:text-base font-semibold text-black mb-2">
          {loading ? "Loading..." : "Rincian Harga"}
        </h3>

        {passengers.adult && !loading ? (
          <div className="flex justify-between text-sm text-black">
            <p className="text-xs lg:text-sm">{passengers.adult} Adults</p>
            <p className="text-xs lg:text-sm">
              IDR {adultPrice?.toLocaleString("id-ID")}
            </p>
          </div>
        ) : loading ? (
          <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
        ) : null}

        {passengers.child && !loading ? (
          <div className="flex justify-between text-sm text-black">
            <p className="text-xs lg:text-sm">{passengers.child} Child</p>
            <p className="text-xs lg:text-sm">
              IDR {childrenPrice?.toLocaleString("id-ID")}
            </p>
          </div>
        ) : loading ? (
          <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
        ) : null}

        {passengers.baby && !loading ? (
          <div className="flex justify-between text-sm text-black">
            <p className="text-xs lg:text-sm">{passengers.baby} Baby</p>
            <p className="text-xs lg:text-sm">IDR 0</p>
          </div>
        ) : loading ? (
          <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
        ) : null}

        <div className="flex justify-between text-sm text-black">
          <p className="text-xs lg:text-sm">Tax</p>
          <p className="text-xs lg:text-sm">
            IDR {loading ? "..." : tax?.toLocaleString("id-ID")}
          </p>
        </div>

        <div className="mt-2 flex justify-between text-base lg:text-lg font-bold border-t text-textPurple">
          <p>Total</p>
          <p>IDR {loading ? "..." : total?.toLocaleString("id-ID")}</p>
        </div>
      </div>
    </>
  );
};

export default FlightDetailData;
