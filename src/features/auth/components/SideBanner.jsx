const SideBanner = () => {
  return (
    <div className="basis-1/2 relative bg-gradient-to-b from-purple-200 to-white">
      <img
        src="/bg-ungu.png"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0">
        <img
          src="/tiketku-logo.png"
          alt="logo"
          className="absolute"
          style={{
            width: "264px",
            height: "146px",
            top: "301px",
            left: "150px",
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
