const DataNotFound = ({ destination }) => {
  return (
    <div className="w-full h-[194px] rounded-xl flex justify-center items-center mt-5">
      <div className="block text-center">
        <img
          src="ticket-sold.png"
          alt="sold"
          style={{
            width: "200.76px",
            height: "130.26px",
          }}
          className="mx-auto mb-1"
        />
        <div className="">Maaf... data penerbangan tidak ditemukan</div>
      </div>
    </div>
  );
};

export default DataNotFound;
