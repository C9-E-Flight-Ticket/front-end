import React, { useState, useEffect } from "react";
import FlightDetail from "../components/FlightDetail";
import TicketCard from "../components/TicketCard";
import { useGetAllUserTransactionsQuery } from "@/services/api/transactionApi";
import HistoryNotFound from "../components/HistoryNotFound";

const HistoryContent = () => {
  const { data, isLoading, error } = useGetAllUserTransactionsQuery({
    refetchOnMountOrArgChange: true,
  });

  const transactionData = data?.payload?.data || [];
  const firstId = transactionData[0]?.id;
  const [activeTicket, setActiveTicket] = useState(firstId);

  useEffect(() => {
    if (!isLoading) setActiveTicket(firstId);
  }, [isLoading]);

  console.log(transactionData);

  const handleSelectTicket = (id) => {
    setActiveTicket(id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data.</div>;
  }

  if (transactionData.length === 0) {
    return <HistoryNotFound />;
  }

  return (
    <div className="overflow-hidden flex flex-col lg:flex-row justify-center">
      <div className="flex lg:mt-[240px] md:mt-[240px] mt-[175px] lg:mr-[60px]">
        <TicketCard
          onSelectTicket={handleSelectTicket}
          data={transactionData}
        />
      </div>
      <div className="lg:w-[346px] w-full md:w-[380px] mt-[250px] lg:bottom-0 md:bottom-0 bottom-0 left-0">
        <FlightDetail selectedTicketId={activeTicket} data={transactionData} />
      </div>
    </div>
  );
};

export default HistoryContent;
