const NotificationCard = ({ title, type, date, desc, requirement }) => {
  return (
    <a href={navigasi}>
      <div className="lg:w-[780px] md:w-[480px] w-[280px] flex items-start gap-4">
        <img src="/circle-notification.svg" />
        <div className="lg:w-[740px] md:w-[560px] sm:w-[400px] w-[240px] grid gap-[4px]">
          <div className="flex justify-between lg:text-sm md:text-[14px] text-[12px] leading-[14px] font-normal text-[#8A8A8A]">
            {title}
            <div className="flex gap-2">
              <p>{date}</p>
              {type === true && <img src="/ellipse-success.svg" />}
              {type === false && <img src="/ellipse-failed.svg" />}
            </div>
          </div>
          <div className="lg:text-base md:text-[15px] text-[12px] text-start leading-5">
            {desc}
          </div>
          {requirement ? (
            <div className="lg:text-sm md:text-[14px] text-[12px] leading-[14px] font-normal text-[#8A8A8A]">
              Syarat dan Ketentuan berlaku!
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </button>
  );
};

export default NotificationCard;
