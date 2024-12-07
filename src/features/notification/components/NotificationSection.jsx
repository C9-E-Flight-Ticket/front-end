import NotificationCard from "./NotificationCard";

const NotificationSection = () => {
  return (
    <div className="absolute top-[304px] left-1/2 -translate-x-[60%] w-[780px] grid gap-[17px]">
      <NotificationCard
        navigasi={"/"}
        title={"Promosi"}
        type={"success"}
        date={"20 Maret, 14:04"}
        desc={"Dapatkan Potongan 50% Tiket!"}
        requirement={true}
      />
      <div className="bg-[#E5E5E5] h-[1px]"></div>
      <NotificationCard
        navigasi={""}
        title={"Notifikasi"}
        type={"failed"}
        date={"5 Maret, 14:04"}
        desc={
          "Terdapat perubahan pada jadwal penerbangan kode booking 45GT6. Cek jadwal perjalanan Anda disini!"
        }
      />
    </div>
  );
};

export default NotificationSection;
