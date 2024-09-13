import { connectDB } from "@/dbConfig/dbConfig";
import Service from "@/models/serviceModel";

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
      model,
      address,
      state,
      city,
      serviceType,
      isPickup,
      serviceDate,
    } = await req.json();

    // Validate required fields
    if (
      !name ||
      !phone ||
      !email ||
      !model ||
      !address ||
      !state ||
      !city ||
      !serviceType ||
      !isPickup ||
      !serviceDate
    ) {
      return new NextResponse(
        JSON.stringify({ error: "Please fill all the fields" }),
        { status: 400 }
      );
    }

    // Get current date and time
    const date = moment().format("DD/MM/YYYY");
    const time = moment().format("HH:mm:ss");

    // Create a new Servicedocument
    const newService = new Service({
      name,
      phone,
      email,
      model,
      city,
      state,
      address,

      serviceType,
      isPickup,
      serviceDate,
      date, // Ensure these fields are in the schema
      time,
    });

    // Save the document to the database
    await newService.save();

    // Return a success response
    return new NextResponse(
      JSON.stringify({
        message: "Service details submitted successfully",
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
