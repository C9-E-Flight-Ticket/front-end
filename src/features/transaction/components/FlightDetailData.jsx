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
}) => {
  const { passengers } = useSelector((state) => state.homepage);
  return (
    <>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm lg:text-base font-bold">{departureHour}</p>
          <p className="text-xs lg:text-sm text-black">{departureDate}</p>
          <p className="text-xs lg:text-sm text-black">{departureGate}</p>
        </div>
        <div className="text-right">
          <p className="text-xs lg:text-sm font-semibold text-lightPurple">
            Keberangkatan
          </p>
        </div>
      </div>
      <div className="pt-2 mt-4 border-t">
        <p className="ml-11 text-sm lg:text-base font-semibold text-black">
          {airLine} - {seatClass}
        </p>
        <p className="ml-11 text-sm lg:text-base font-bold">{flightNumber}</p>
        <div className="mt-4 flex items-start gap-3">
          <img src={airLineImg} alt="AirAsia Logo" className="w-8 h-8" />
          <div>
            <p className="text-sm lg:text-base font-bold">Informasi :</p>
            <p className="text-sm lg:text-base">Baggage {baggage} kg</p>
            <p className="text-sm lg:text-base">
              Cabin baggage {cabinBaggage} kg
            </p>
            <p className="text-sm lg:text-base">{entertainment}</p>
          </div>
        </div>
      </div>
      <div className="pt-2 mt-2 flex border-t justify-between items-start">
        <div>
          <p className="text-sm lg:text-base font-bold">{arrivalHour}</p>
          <p className="text-xs lg:text-sm text-black">{arrivalDate}</p>
          <p className="text-xs lg:text-sm text-black">{arrivalGate}</p>
        </div>
        <div className="text-right">
          <p className="text-xs lg:text-sm font-semibold text-lightPurple">
            Kedatangan
          </p>
        </div>
      </div>
      <div className="pt-2 mt-2 lg:ml-3 border-t">
        <h3 className="text-sm lg:text-base font-semibold text-black mb-2">
          Rincian Harga
        </h3>

        {passengers.adult ? (
          <div className="flex justify-between text-sm text-black">
            <p className="text-xs lg:text-sm">{passengers.adult} Adults</p>
            <p className="text-xs lg:text-sm">
              IDR {adultPrice?.toLocaleString("id-ID")}
            </p>
          </div>
        ) : (
          ""
        )}

        {passengers.child ? (
          <div className="flex justify-between text-sm text-black">
            <p className="text-xs lg:text-sm">{passengers.child} Child</p>
            <p className="text-xs lg:text-sm">
              IDR {childrenPrice?.toLocaleString("id-ID")}
            </p>
          </div>
        ) : (
          ""
        )}

        {passengers.baby ? (
          <div className="flex justify-between text-sm text-black">
            <p className="text-xs lg:text-sm">{passengers.baby} Baby</p>
            <p className="text-xs lg:text-sm">IDR 0</p>
          </div>
        ) : (
          ""
        )}

        <div className="flex justify-between text-sm text-black">
          <p className="text-xs lg:text-sm">Tax</p>
          <p className="text-xs lg:text-sm">
            IDR {tax?.toLocaleString("id-ID")}
          </p>
        </div>

        <div className="mt-2 flex justify-between text-base lg:text-lg font-bold border-t text-textPurple">
          <p>Total</p>
          <p>IDR {total?.toLocaleString("id-ID")}</p>
        </div>
      </div>
    </>
  );
};
export default FlightDetailData;
