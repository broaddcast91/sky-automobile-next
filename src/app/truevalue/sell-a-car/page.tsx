
import { Metadata } from "next";
import SellCar from "./SellCar";



// Server-side metadata export
export const metadata: Metadata = {
  title:
    "Sell Your Car - Sky automobile Motors, Maruti Suzuki, Monsoon offers, Special Offers, September month offers",
  description: "Generated by create next app",
};

export default function BookAServicePage() {
  return <SellCar />;
}
