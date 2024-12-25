const SideBanner = () => {
  return (
    <div className="basis-1/2 relative bg-gradient-to-b from-purple-200 to-white hidden lg:block">
      <img
        src="/bg-ungu.png"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0">
        <img
          src="/flaizy.png"
          alt="logo"
          className="absolute xl:left-[14rem] 2xl:left-[16rem] left-36"
          style={{
            width: "264px",
            top: "301px",
          }}
        />

        <img
          src="/flower.png"
          alt="flower"
          className="absolute"
          style={{
            width: "100%",
            height: "498px",
            bottom: "30px",
            left: "0px",
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
};

export default SideBanner;
