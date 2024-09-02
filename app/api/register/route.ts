import { NextRequest, NextResponse } from "next/server";

import { BACKEND_URL } from "@/constants";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  try {
    const res = await fetch(`${BACKEND_URL}/register`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const { ok, status } = res;
    const text = await res.text();

    if (ok) {
      return new NextResponse(text, { status });
    }

    return new NextResponse(text, { status });
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
};
