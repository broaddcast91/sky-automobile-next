import { connectDB } from "@/dbConfig/dbConfig";
import SellYourCar from "@/models/sellYourCarModel";

import moment from "moment";
import "moment-timezone";
import { NextResponse, NextRequest } from "next/server";

moment.tz.setDefault("Asia/Kolkata");
connectDB();

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const {
      name,
      phone,
      email,
      carModel,
      address,
      state,
      city,
      brandName,
      makeYear,
      fuelType,
      ownerShip,
      carVariant,
      kilometerDriven,
      registerCity,
      transmission,
    } = await req.json();

    // Validate required fields
    if (
      !name ||
      !phone ||
      !email ||
      !carModel ||
      !address ||
      !state ||
      !city ||
      !brandName ||
      !makeYear ||
      !fuelType ||
      !ownerShip ||
      !carVariant ||
      !kilometerDriven ||
      !registerCity ||
      !transmission
    ) {
      return new NextResponse(
        JSON.stringify({ error: "Please fill all the fields" }),
        { status: 400 }
      );
    }

    // Get current date and time
    const date = moment().format("DD/MM/YYYY");
    const time = moment().format("HH:mm:ss");

    // Create a new Insurancedocument
    const newSellYourCar = new SellYourCar({
      name,
      phone,
      email,
      carModel,
      brandName,
      makeYear,
      fuelType,
      ownerShip,
      carVariant,
      kilometerDriven,
      registerCity,
      transmission,
      city,
      state,
      address,
      date, // Ensure these fields are in the schema
      time,
    });

    // Save the document to the database
    await newSellYourCar.save();

    // Return a success response
    return new NextResponse(
      JSON.stringify({
        message: "Sell your car details submitted successfully",
        status: true,
      }),
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Error:", err.message);
    return new NextResponse(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}
