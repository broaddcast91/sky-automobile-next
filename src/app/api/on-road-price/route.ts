import { connectDB } from "@/dbConfig/dbConfig";
import OnRoadPrice from "@/models/onRoadPriceModel";

import moment from "moment";
import "moment-timezone";
import { NextResponse, NextRequest } from "next/server";

moment.tz.setDefault("Asia/Kolkata");
connectDB();

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const { name, phone, email, model, outlet, variant, state } =
      await req.json();

      console.log(name, phone, email, model, outlet, variant, state);
    // Validate required fields
    if (!name || !phone || !email || !model || !outlet || !variant || !state) {
      return new NextResponse(
        JSON.stringify({ error: "Please fill all the fields" }),
        { status: 400 }
      );
    }

    // Get current date and time
    const date = moment().format("DD/MM/YYYY");
    const time = moment().format("HH:mm:ss");


    // Create a new Finance document
    const newEnquiry = new OnRoadPrice({
      name,
      phone,
      email,
      model,
      variant,
      state,
      outlet,

      date, // Ensure these fields are in the schema
      time,
    });

    // Save the document to the database
    await newEnquiry.save();

    // Return a success response
    return new NextResponse(
      JSON.stringify({
        message: "Enquiry details submitted successfully",
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
