import React, { useState } from "react";
import FlightDetail from "../components/FlightDetail";
import TicketCard from "../components/TicketCard";
import { useGetAllUserTransactionsQuery } from "@/services/api/transactionApi";
import HistoryNotFound from "../components/HistoryNotFound";

const HistoryContent = () => {
  const { data, isLoading, error } = useGetAllUserTransactionsQuery({
    refetchOnMountOrArgChange: true,
  });

  const transactionData = data?.payload?.data || [];
  const firstId = transactionData.length > 0 ? transactionData[0].id : null;
  const [activeTicket, setActiveTicket] = useState(firstId);

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
    <div className="flex justify-center">
      <div className="w-[500px] mt-[270px] mr-[50px]">
        <TicketCard
          onSelectTicket={handleSelectTicket}
          data={transactionData}
        />
      </div>
      <div className="w-[346px] mt-[270px]">
        <FlightDetail selectedTicketId={activeTicket} data={transactionData} />
      </div>
    </div>
  );
};

export default HistoryContent;
