import Cookie from "js-cookie";
import { resetFlightState } from "@/services/flightSlice";
import { resetHomepageState } from "@/services/homepageSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutQuery } from "@/services/api/authApi";
const LogoutModal = ({ handleLogoutModal }) => {
  const { refetch: logoutQuery } = useLogoutQuery();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    if (import.meta.env.VITE_NODE_ENV != "production") {
      Cookie.remove("access_token");
    } else {
      try {
        logoutQuery();
      } catch (error) {
        console.log(error);
      }
    }

    dispatch(resetHomepageState());
    dispatch(resetFlightState());
    navigate("/login");
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[100]">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 py-2 px-4 bg-white rounded-2xl">
        <div className="grid gap-4">
          <div className="h-[50px] w-[400px] text-xl p-1 text-center mt-5">
            Apakah anda yakin ingin keluar?
          </div>
          <div className="flex justify-center items-center gap-6 mb-5">
            <button
              onClick={() => handleLogoutModal(false)}
              className="w-[150px] py-3 bg-[#d70202] rounded-xl text-white hover:bg-[#690000]"
            >
              Tidak
            </button>
            <button
              className="w-[150px] py-3 bg-[#5dc242] rounded-xl text-white hover:bg-[#2d5d1f]"
              onClick={handleLogout}
            >
              Ya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
