const Notification = ({ errors, successMessage, isSubmitted }) => {
  return (
    <div className="w-[300px] max-w-lg mt-4 absolute bottom-14">
      {Object.keys(errors).length > 0 ? (
        <div className="px-4 py-2 bg-red-500 text-center text-white rounded-xl text-sm">
          <ul>
            <li>{Object.values(errors)[0]?.message}</li>
          </ul>
        </div>
      ) : (
        isSubmitted && (
          <div className="px-4 py-2 text-center bg-green-500 text-white rounded-xl text-sm mt-4">
            {successMessage}
          </div>
        )
      )}
    </div>
  );
};

export default Notification;
