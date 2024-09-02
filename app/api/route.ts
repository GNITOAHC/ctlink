import { NextRequest, NextResponse } from "next/server";

import { BACKEND_URL } from "@/constants";

export const GET = async (request: NextRequest) => {
  try {
    const res = await fetch(BACKEND_URL, { method: "GET", cache: "no-store" });

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
