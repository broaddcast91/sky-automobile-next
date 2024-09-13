import { connectDB } from "@/dbConfig/dbConfig";
import Finance from "@/models/financeModel";
import moment from "moment";
import "moment-timezone";
import { NextResponse, NextRequest } from "next/server";

moment.tz.setDefault("Asia/Kolkata");
connectDB();

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const { name, phone, email, model, loanAmount, loanTenure, state, city } =
      await req.json();

    // Validate required fields
    if (!name || !phone || !email || !model || !loanAmount || !loanTenure || !state || !city) {
      return new NextResponse(
        JSON.stringify({ error: "Please fill all the fields" }),
        { status: 400 }
      );
    }

    // Get current date and time
    const date = moment().format("DD/MM/YYYY");
    const time = moment().format("HH:mm:ss");

    // Create a new Finance document
    const newFinance = new Finance({
      name,
      phone,
      email,
      model,
      city,
      state,
      loanAmount,
      loanTenure,
      date, // Ensure these fields are in the schema
      time,
    });

    // Save the document to the database
    await newFinance.save();

    // Return a success response
    return new NextResponse(
      JSON.stringify({
        message: "Finance details submitted successfully",
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
