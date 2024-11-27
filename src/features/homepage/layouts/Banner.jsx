const Banner = () => {
  return (
    <div className="w-full flex justify-center items-center h-[250px] relative top-28">
      <img
        src="/banner-bangkok.png"
        alt="banner"
        className="absolute inset-0 w-10/12 h-full object-cover rounded-3xl mx-auto"
      />
      <div className="absolute w-full h-36 bg-gradient-to-r from-[#7126B580] to-[#E2D4F0] z-[-20]"></div>
      <div className="absolute w-10/12 inset-0 bg-gradient-to-r from-[#FFE9CA] to-transparent rounded-3xl z-10 mx-auto"></div>
      <div className="absolute w-10/12 inset-0 bg-gradient-to-r from-[#FFE9CA] to-transparent rounded-3xl z-10 mx-auto"></div>
      <div className="absolute w-10/12 inset-0 bg-gradient-to-r from-[#FFE9CA] to-transparent rounded-3xl z-10 mx-auto"></div>

      <div className="z-20 flex items-center justify-start w-10/12 mx-52">
        <h1 className="text-3xl font-bold italic">
          Diskon Hari Ini <br />{" "}
          <span className="text-primaryPurple not-italic">85%</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
