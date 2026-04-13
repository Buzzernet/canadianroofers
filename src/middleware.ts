// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";
import {
  AB_COOKIE_NAME,
  AB_TTL_SECONDS,
  type ABCookiePayload,
} from "@/lib/ab-testing";
import { resolveAbVariantFromCookie } from "@/lib/pick-ab-variant";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") {
    return NextResponse.next();
  }

  const raw = request.cookies.get(AB_COOKIE_NAME)?.value;
  const now = Date.now();
  const variant = resolveAbVariantFromCookie(
    raw,
    now,
    AB_TTL_SECONDS * 1000,
  );

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-ab-variant", variant);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  const payload: ABCookiePayload = { variant, assignedAt: now };

  response.cookies.set({
    name: AB_COOKIE_NAME,
    value: encodeURIComponent(JSON.stringify(payload)),
    maxAge: AB_TTL_SECONDS,
    path: "/",
    sameSite: "lax",
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}

export const config = {
  matcher: "/",
};
