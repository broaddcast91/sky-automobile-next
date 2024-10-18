// pages/offers.tsx
import { Metadata } from "next";
import BookAService from "./BookAService";


// Server-side metadata export
export const metadata: Metadata = {
  title:
    "Book Maruti Suzuki Service Online Bhubaneswar, Raipur | Sky Maruti Suzuki",
  description:
    "Book your Maruti Suzuki service appointment online at Sky Maruti Suzuki Bhubaneswar, Raipur. Quick and convenient service booking with expert technicians and genuine parts.",
};


export default function BookAServicePage() {
  return <BookAService />;
}
