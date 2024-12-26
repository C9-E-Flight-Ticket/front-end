import { useState, useEffect } from "react";
import FlightDetail from "../components/FlightDetail";
import TicketCard from "../components/TicketCard";
import { useGetAllUserTransactionsQuery } from "@/services/api/transactionApi";
import HistoryNotFound from "../components/HistoryNotFound";
import { Spinner } from "@material-tailwind/react";

const HistoryContent = () => {
  const { data, isLoading, error, isFetching } = useGetAllUserTransactionsQuery(
    null,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const transactionData = data?.payload?.data || [];
  const firstId = transactionData[0]?.id;
  const [activeTicket, setActiveTicket] = useState(firstId);

  console.log(transactionData)

  useEffect(() => {
    if (!isLoading) setActiveTicket(firstId);
  }, [isLoading, firstId]);

  const handleSelectTicket = (id) => {
    setActiveTicket(id);
  };

  return (
    <>
      {isLoading || isFetching ? (
        <Spinner className="h-16 w-16 flex absolute top-1/2 left-1/2" />
      ) : (!isLoading || !isFetching) && transactionData.length > 0 ? (
        <div className="overflow-hidden flex flex-col lg:flex-row justify-center">
          <div className="mt-[175px] md:mt-[240px] lg:mt-[240px] lg:mr-[60px]">
            <TicketCard
              onSelectTicket={handleSelectTicket}
              data={transactionData}
            />
          </div>
          <div className="w-full md:w-[380px] lg:w-[346px] mt-[250px]">
            <FlightDetail
              selectedTicketId={activeTicket}
              data={transactionData}
              isFetching={isLoading}
            />
          </div>
        </div>
      ) : (
        <HistoryNotFound />
      )}
    </>
  );
};

export default HistoryContent;
