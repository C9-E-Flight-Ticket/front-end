import { useNavigate } from "react-router-dom";

const HeaderMenu = ({ title, headerId }) => {
  const navigate = useNavigate();
  function handleBackToHomepage() {
    navigate(-1);
  }
  return (
    <div className="fixed w-full h-[235px] shadow-md z-50 bg-white">
      <div className="fixed top-[106px] left-1/2 -translate-x-[490px] text-xl font-bold">
        {title}
      </div>
      <div className="fixed top-[150px] left-1/2 -translate-x-1/2 w-[968px] py-2 px-4 flex gap-3">
        <div
          className={`h-[50px] flex gap-2 bg-[#A06ECE] py-[5px] px-4 rounded-xl text-white ${
            headerId === 1 ? "w-[777px]" : "w-[936px]"
          }`}
        >
          <button onClick={handleBackToHomepage}>
            <img src="/arrow-left.png" />
          </button>
          <div className="py-2 px-[10px]">Beranda</div>
        </div>
        {headerId === 1 && (
          <div className="w-[147px] h-[50px] py-[5px] px-[6px] flex items-center gap-4">
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
