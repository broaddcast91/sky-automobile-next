import { connectDB } from "@/dbConfig/dbConfig";
import BuyACar from "@/models/buyACarModel";

import moment from "moment";
import "moment-timezone";
import { NextResponse, NextRequest } from "next/server";

moment.tz.setDefault("Asia/Kolkata");
connectDB();

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const { name, phone, email, outlet, state, model, carNumber } =
      await req.json();

    // Validate required fields
    if (!name || !phone || !state || !outlet || !model || !carNumber) {
      return new NextResponse(
        JSON.stringify({ error: "Please fill all the fields" }),
        { status: 400 }
      );
    }

    // Get current date and time
    const date = moment().format("DD/MM/YYYY");
    const time = moment().format("HH:mm:ss");

    // Create a new Insurancedocument

    const newBuyACar = new BuyACar({
      name,
      phone,
      email,
      outlet,
      state,
      model,
      carNumber,
      date,
      time,
    });
    // Save the document to the database
    await newBuyACar.save();

    // Return a success response
    return new NextResponse(
      JSON.stringify({
        message: "Insurance details submitted successfully",
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
