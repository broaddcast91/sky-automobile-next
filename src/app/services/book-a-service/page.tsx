// pages/offers.tsx
import { Metadata } from "next";
import BookAService from "./BookAService";


// Server-side metadata export
export const metadata: Metadata = {
  title:
    "Book A Service - Sky automobile Motors, Maruti Suzuki, Monsoon offers, Special Offers, September month offers",
  description: "Generated by create next app",
};


export default function BookAServicePage() {
  return <BookAService />;
}
