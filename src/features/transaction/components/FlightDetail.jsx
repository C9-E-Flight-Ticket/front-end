import FlightDetailData from "@/features/transaction/components/FlightDetailData";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const FlightDetail = () => {
  const [activeTab, setActiveTab] = React.useState("pergi");
  const data = [
    {
      label: "Pergi",
      value: "pergi",
      desc: (
        <FlightDetailData
          departureHour={"07:00"}
          departureDate={"3 Maret 2023"}
          departureGate={"Soekarno Hatta - Terminal 1A Domestik"}
          arrivalHour={"11:00"}
          arrivalDate={"3 Maret 2023"}
          arrivalGate={"Melbourne International Airport"}
        />
      ),
    },
    {
      label: "Pulang",
      value: "Pulang",
      desc: (
        <FlightDetailData
          departureHour={"13:00"}
          departureDate={"8 Maret 2023"}
          departureGate={"Melbourne International Airport"}
          arrivalHour={"17:00"}
          arrivalDate={"8 Maret 2023"}
          arrivalGate={"Soekarno Hatta - Terminal 1A Domestik"}
        />
      ),
    },
  ];
  return (
    <>
      <h2 className="text-lg font-bold text-black mb-4">Detail Penerbangan</h2>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-900" : ""}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel className="text-black" key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
};

export default FlightDetail;
