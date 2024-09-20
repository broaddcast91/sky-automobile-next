"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// // Define the context value type
interface DataContextType {
  //   openSelectState: boolean;
  //   setOpenSelectState: (open: boolean) => void;
  //   selectedState: string;
  //   setSelectedState: (state: string) => void;
}

// Create a context with a default value
const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataWrapperProps {
  children: ReactNode;
}

export function DataWrapper({ children }: DataWrapperProps) {
  const [financeData, setFinaceData] = useState([]);
  const [insuranceData, setInsuranceData] = useState([]);
  const [testDriveData, setTestDriveData] = useState([]);
  const [careerData, setCareerData] = useState([]);
  const [contactUsData, setContactUsData] = useState([]);
  const [buyACarData, setBuyACarData] = useState([]);
  const [sellACarData, setSellACarData] = useState([]);
  const [arenaData, setArenaData] = useState([]);
  const [nexaData, setNexaData] = useState([]);
  const [bookAServiceData, setBookAServiceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all([
        fetch("/api/finance"),
        fetch("/api/insurance"),
        fetch("/api/test-drive"),
        fetch("/api/career"),
        fetch("/api/contact-us"),
        fetch("/api/buy-a-car"),
        fetch("/api/sell-a-car"),
        fetch("/api/arena"),
        fetch("/api/nexa"),
        fetch("/api/book-a-service"),
      ]);

      const [
        finance,
        insurance,
        testDrive,
        career,
        contactUs,
        buyACar,
        sellACar,
        arena,
        nexa,
        bookAService,
      ] = await Promise.all(data.map((res) => res.json()));

      setFinaceData(finance);
      setInsuranceData(insurance);
      setTestDriveData(testDrive);
      setCareerData(career);
      setContactUsData(contactUs);
      setBuyACarData(buyACar);
      setSellACarData(sellACar);
      setArenaData(arena);
      setNexaData(nexa);
      setBookAServiceData(bookAService);
    };
  });

  // Define the context value
  const contextValue: DataContextType = {
    financeData,
    setFinaceData,
    insuranceData,
    setInsuranceData,
    testDriveData,
    setTestDriveData,
    careerData,
    setCareerData,
    contactUsData,
    setContactUsData,
    buyACarData,
    setBuyACarData,
    sellACarData,
    setSellACarData,
    arenaData,
    setArenaData,
    nexaData,
    setNexaData,
    bookAServiceData,
    setBookAServiceData,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}

// Custom hook to use the AppContext
export const useAppContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }
  return context;
};
