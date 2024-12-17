import { useNavigate } from "react-router-dom";

const HeaderMenu = ({ title, headerId }) => {
  const navigate = useNavigate();
  function handleBackToHomepage() {
    navigate(-1);
  }
  return (
    <div className="fixed w-full lg:h-[235px] md:h-[235px] h-[175px] shadow-md z-50 bg-white">
      <div className="fixed lg:top-[106px] md:top-[106px] top-[86px] lg:left-1/2 left-4 lg:-translate-x-[490px] lg:text-xl md:text-xl text-base font-bold">
        {title}
      </div>
      <div className="fixed lg:top-[150px] md:top-[150px] top-[105px] lg:left-1/2 lg:-translate-x-1/2 lg:w-[968px] md:w-[750px] w-[330px] py-2 px-4 flex items-center lg:gap-3 md:gap-3 gap:2">
        <div
          className={`lg:h-[50px] md:h-[50px] h-[35px] flex items-center gap-2 bg-[#A06ECE] py-[5px] px-4 rounded-xl text-white ${
            headerId === 1 ? "w-[777px]" : "w-[936px]"
          }`}
        >
          <button onClick={handleBackToHomepage}>
            <img src="/arrow-left.png" />
          </button>
          <div className="py-2 px-[10px]">Beranda</div>
        </div>
        {headerId === 1 && (
          <div className="py-[5px] px-[6px] flex items-center gap-4">
            <button className="h-[32px] rounded-2xl px-1 border border-[#7126B5]">
              <div className="flex">
                <div className="py-[2px] pl-1 flex items-center">
                  <img className="w-[16.67px] h-[16.67px]" src="/filter.svg" />
                </div>
                <div className="px-2 text-base">Filter</div>
              </div>
            </button>
            <button>
              <img src="/search.svg" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMenu;
