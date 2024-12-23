import { useGetAllNotificationsQuery } from "@/services/api/accountApi";
import NotificationCard from "./NotificationCard";
import { dateToTime, formatDateToUI } from "@/utils/helper";

const NotificationSection = () => {
  const { data, isLoading, error, isFetching } = useGetAllNotificationsQuery();
  return (
    <>
      {(isLoading || isFetching) && (
        <div className="absolute top-[324px] left-1/2 -translate-x-1/2">
          <div
            className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
      {(!isLoading || !isFetching) && (
        <div className="absolute md:top-[280px] left-1/2 -translate-x-1/2 top-[200px] sm:left-1/2 sm:-translate-x-[60%] grid gap-[17px]">
          {data?.payload?.data?.length === 0 ? (
            <div className="text-center text-[#8A8A8A]">
              Tidak ada notifikasi...
            </div>
          ) : (
            data?.payload?.data.map((notification, index) => (
              <div className="grid gap-[17px]" key={index}>
                <NotificationCard
                  title={notification.title}
                  type={notification.read}
                  date={`${formatDateToUI(
                    notification.createdAt
                  )}, ${dateToTime(notification.createdAt)}`}
                  desc={notification.message}
                />
                {index !== data.payload.data.length - 1 && (
                  <div className="bg-[#E5E5E5] h-[1px]"></div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
};

export default NotificationSection;
