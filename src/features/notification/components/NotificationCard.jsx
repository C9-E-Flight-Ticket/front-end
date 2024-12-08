const NotificationCard = ({
  navigasi,
  title,
  type,
  date,
  desc,
  requirement,
}) => {
  return (
    <a href={navigasi}>
      <div className="w-[780px] flex items-start gap-4">
        <img src="/circle-notification.svg" />
        <div className="w-[740px] grid gap-[4px]">
          <div className="flex justify-between text-sm leading-[14px] font-normal text-[#8A8A8A]">
            {title}
            <div className="flex gap-2">
              <p>{date}</p>
              {type === "success" && <img src="/ellipse-success.svg" />}
              {type === "failed" && <img src="/ellipse-failed.svg" />}
            </div>
          </div>
          <div className="text-base leading-5">{desc}</div>
          {requirement ? (
            <div className="text-sm leading-[14px] font-normal text-[#8A8A8A]">
              Syarat dan Ketentuan berlaku!
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </a>
  );
};

export default NotificationCard;
