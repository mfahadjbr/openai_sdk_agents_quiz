import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

export async function GET() {
  try {
    // Test the database connection
    const sql = neon(process.env.DATABASE_URL!)
    const result = await sql`SELECT NOW() as time`

    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      time: result[0].time,
      dbUrl: process.env.DATABASE_URL ? `${process.env.DATABASE_URL.substring(0, 20)}...` : "Not set",
    })
  } catch (error) {
    console.error("Database connection error:", error)
    return NextResponse.json(
      {
        success: false,
        error: String(error),
        dbUrl: process.env.DATABASE_URL ? `${process.env.DATABASE_URL.substring(0, 20)}...` : "Not set",
      },
      { status: 500 },
    )
  }
}
