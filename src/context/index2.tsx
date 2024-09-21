"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define the shape of the MongoDB data
interface MongoDBData {
  _id: {
    $oid: string;
  };
  name: string;
  phone: string;
  email: string;
  model: string;
  outlet: string;
  variant: string;
  leadFrom: string;
  state: string;
  isDeleted: boolean;
  time: string;
  date: string;
  createdAt: {
    $date: string;
  };
  updatedAt: {
    $date: string;
  };
  __v: number;
}

// // Define the context value type
interface DataContextType {
  financeData: MongoDBData[];
  setFinanceData: (data: MongoDBData[]) => void;
  insuranceData: MongoDBData[];
  setInsuranceData: (data: MongoDBData[]) => void;
  testDriveData: MongoDBData[];
  setTestDriveData: (data: MongoDBData[]) => void;
  careerData: MongoDBData[];
  setCareerData: (data: MongoDBData[]) => void;
  contactUsData: MongoDBData[];
  setContactUsData: (data: MongoDBData[]) => void;
  buyACarData: MongoDBData[];
  setBuyACarData: (data: MongoDBData[]) => void;
  sellACarData: MongoDBData[];
  setSellACarData: (data: MongoDBData[]) => void;
  arenaData: MongoDBData[];
  setArenaData: (data: MongoDBData[]) => void;
  nexaData: MongoDBData[];
  setNexaData: (data: MongoDBData[]) => void;
  bookAServiceData: MongoDBData[];
  setBookAServiceData: (data: MongoDBData[]) => void;
}

// Create a context with a default value
const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataWrapperProps {
  children: ReactNode;
}

export function DataWrapper({ children }: DataWrapperProps) {
  const [financeData, setFinanceData] = useState<MongoDBData[]>([]);
  const [insuranceData, setInsuranceData] = useState<MongoDBData[]>([]);
  const [testDriveData, setTestDriveData] = useState<MongoDBData[]>([]);
  const [careerData, setCareerData] = useState<MongoDBData[]>([]);
  const [contactUsData, setContactUsData] = useState<MongoDBData[]>([]);
  const [buyACarData, setBuyACarData] = useState<MongoDBData[]>([]);
  const [sellACarData, setSellACarData] = useState<MongoDBData[]>([]);
  const [arenaData, setArenaData] = useState<MongoDBData[]>([]);
  const [nexaData, setNexaData] = useState<MongoDBData[]>([]);
  const [bookAServiceData, setBookAServiceData] = useState<MongoDBData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/on-road-price?rangeValue=allData&channel=Arena"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setArenaData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // Define the context value
  const contextValue: DataContextType = {
    financeData,
    setFinanceData,
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
export const useDataContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }
  return context;
};

// export default DataContext;
