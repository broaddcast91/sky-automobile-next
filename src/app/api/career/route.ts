import { connectDB } from "@/dbConfig/dbConfig";
import Career from "@/models/careerModel";


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
      email,
      designation,
      noticePeriod,
      phone,
      experience,
      currentCTC,
      expectedCTC,
      state,
    } = await req.json();

    // Validate required fields
    if (!name || !phone || !email || !designation || !noticePeriod || !experience || !currentCTC || !expectedCTC ||  !state) {
      return new NextResponse(
        JSON.stringify({ error: "Please fill all the fields" }),
        { status: 400 }
      );
    }

    // Get current date and time
    const date = moment().format("DD/MM/YYYY");
    const time = moment().format("HH:mm:ss");

    // Create a new Career document
    const career = new Career({
      name,
      email,
      designation,
      noticePeriod,
      phone,
      experience,
      currentCTC,
      expectedCTC,
      state,
      date, // Ensure these fields are in the schema
      time,
    });

    // Save the document to the database
    await career.save();

    // Return a success response
    return new NextResponse(
      JSON.stringify({
        message: "Career  details submitted successfully",
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
