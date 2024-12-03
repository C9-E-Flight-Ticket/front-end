import { useSelector } from "react-redux";

const FlightDetail = () => {
  const { passengers } = useSelector((state) => state.homepage);
  return (
    <div className="max-w-md p-6 fixed">
      <h2 className="text-lg font-bold text-black mb-1">Detail Penerbangan</h2>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-base font-bold">07:00</p>
          <p className="text-sm text-black">3 Maret 2023</p>
          <p className="text-sm text-black">
            Soekarno Hatta - Terminal 1A Domestik
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-lightPurple">
            Keberangkatan
          </p>
        </div>
      </div>
      <div className="pt-2 mt-4 border-t">
        <p className="ml-11 text-base font-semibold text-black">
          Jet Air - Economy
        </p>
        <p className="ml-11 text-base font-bold">JT - 203</p>
        <div className="mt-4 flex items-start gap-3">
          <img src="/air-asia.png" alt="AirAsia Logo" className="w-8 h-8" />
          <div>
            <p className="text-base font-bold">Informasi :</p>
            <p>Baggage 20 kg</p>
            <p>Cabin baggage 7 kg</p>
            <p>In Flight Entertainment</p>
          </div>
        </div>
      </div>
      <div className="pt-2 mt-2 flex border-t justify-between items-start">
        <div>
          <p className="text-base font-bold">11:00</p>
          <p className="text-sm text-black">3 Maret 2023</p>
          <p className="text-sm text-black">Melbourne International Airport</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-lightPurple">Kedatangan</p>
        </div>
      </div>
      <div className="pt-2 mt-2 ml-3 border-t">
        <h3 className="text-base font-semibold text-black mb-2">
          Rincian Harga
        </h3>

        {passengers.adult ? (
          <div className="flex justify-between text-sm text-black">
            <p>{passengers.adult} Adults</p>
            <p>IDR 9.550.000</p>
          </div>
        ) : (
          ""
        )}

        {passengers.child ? (
          <div className="flex justify-between text-sm text-black">
            <p>{passengers.child} Child</p>
            <p>IDR 9.550.000</p>
          </div>
        ) : (
          ""
        )}

        {passengers.baby ? (
          <div className="flex justify-between text-sm text-black">
            <p>{passengers.baby} Baby</p>
            <p>IDR 9.550.000</p>
          </div>
        ) : (
          ""
        )}

        {!!passengers.adult && !!passengers.child && !!passengers.baby && (
          <>
            <div className="flex justify-between text-sm text-black">
              <p>Tax</p>
              <p>IDR 300.000</p>
            </div>

            <div className="mt-2 flex justify-between text-lg font-bold border-t text-textPurple">
              <p>Total</p>
              <p>IDR 9.850.000</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FlightDetail;
