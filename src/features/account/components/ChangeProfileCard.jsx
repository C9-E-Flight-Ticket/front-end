import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "@/services/api/accountApi";
import ConfirmUpdateModal from "../components/ConfirmUpdateModal";

const ChangeProfileCard = () => {
  const {
    data: userProfile,
    isLoading: isLoadingProfile,
    isFetching,
    error: profileError,
  } = useGetUserProfileQuery(null, { refetchOnMountOrArgChange: true });
  const [updateUserProfile, { isLoading: isUpdating }] =
    useUpdateUserProfileMutation();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    if (userProfile?.payload?.data) {
      console.log("User profile fetched:", userProfile.payload.data);
      reset({
        fullName: userProfile.payload.data.name,
        email: userProfile.payload.data.email,
        phoneNumber: userProfile.payload.data.phoneNumber,
      });
    } else if (profileError) {
      console.error("Error fetching user profile:", profileError);
    }
  }, [userProfile, profileError, reset]);

  const handleConfirm = async () => {
    if (!formData) return;
    try {
      const response = await updateUserProfile({
        name: formData.fullName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
      }).unwrap();
      console.log("Profile updated successfully:", response);
      setNotification("Profil berhasil diperbarui!");
      setTimeout(() => setNotification(""), 3000);
    } catch (error) {
      console.error("Error saat update profil:", error);
    } finally {
      setModalOpen(false);
    }
  };

  const onSubmit = (data) => {
    setFormData(data);
    setModalOpen(true);
  };

  return (
    <div className="lg:w-[550px] md:w-[480px] sm:w-[550px] w-[440px] py-[6px] px-4">
      <div
        style={{
          boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
        }}
        className="rounded-[4px] py-6"
      >
        <div className="lg:w-[518px] md:w-[448px] sm:w-[518px] w-[408px] xs:w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 p-4">
              <div className="text-xl font-bold">Profil Pengguna</div>
              {isLoadingProfile || isFetching ? (
                <div className="text-center py-4">Loading profile...</div>
              ) : (
                <>
                  <div className="block">
                    <div className="rounded-t-[10px] py-2 px-4 bg-[#A06ECE] text-white text-base font-medium">
                      Data Diri
                    </div>
                    <div className="grid gap-3 p-4">
                      <div className="grid gap-1">
                        <label className="text-sm font-bold text-[#4B1979]">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          {...register("fullName", {
                            required: "Nama lengkap wajib diisi",
                          })}
                          className="border border-[#D0D0D0] rounded-[4px] py-2 pl-4 pr-2"
                        />
                        {errors.fullName && (
                          <span className="text-sm text-red-500">
                            {errors.fullName.message}
                          </span>
                        )}
                      </div>
                      <div className="grid gap-1">
                        <label className="text-sm font-bold text-[#4B1979]">
                          Nomor Telepon
                        </label>
                        <input
                          type="text"
                          {...register("phoneNumber", {
                            required: "Nomor telepon wajib diisi",
                            pattern: {
                              value: /^(\+?\d{1,3}|\d{1,4})?\s?\d+$/,
                              message: "Nomor telepon tidak valid",
                            },
                          })}
                          className="border border-[#D0D0D0] rounded-[4px] py-2 pl-4 pr-2"
                        />
                        {errors.phoneNumber && (
                          <span className="text-sm text-red-500">
                            {errors.phoneNumber.message}
                          </span>
                        )}
                      </div>
                      <div className="grid gap-1">
                        <label className="text-sm font-bold text-[#4B1979]">
                          Email
                        </label>
                        <input
                          type="email"
                          {...register("email")}
                          className="border border-[#D0D0D0] rounded-[4px] py-2 pl-4 pr-2 "
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            {(!isLoadingProfile || !isFetching) && (
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="w-[150px] py-3 bg-[#4B1979] hover:bg-[#351e47] rounded-xl text-white"
                >
                  {isUpdating ? "Menyimpan..." : "Simpan"}
                </button>
              </div>
            )}
          </form>
        </div>
        <ConfirmUpdateModal
          isOpen={isModalOpen}
          onConfirm={handleConfirm}
          onCancel={() => setModalOpen(false)}
        />
      </div>
      {notification && (
        <div className="fixed bottom-16 bg-green-500 text-white  py-2 px-4 rounded-lg">
          {notification}
        </div>
      )}
    </div>
  );
};

export default ChangeProfileCard;
