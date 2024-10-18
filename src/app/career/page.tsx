
import { Metadata } from "next";
import CareerPage from "./CareerPage";


// Server-side metadata export
export const metadata: Metadata = {
  title: "Careers at Sky Maruti Suzuki Bhubaneswar, Raipur | Join Our Team",
  description:
    "Looking for exciting career opportunities in the automobile industry? Join Sky Maruti Suzuki Bhubaneswar, Raipur and be a part of our dynamic team, contributing to the growth of Maruti Suzuki.",
};


export default function Career() {
  return <CareerPage />;
}
