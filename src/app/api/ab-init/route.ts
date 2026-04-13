import { NextResponse } from "next/server";
import {
  AB_COOKIE_MAX_AGE,
  AB_COOKIE_NAME,
  type ABCookiePayload,
} from "@/lib/ab-testing";
import { pickAbVariant } from "@/lib/pick-ab-variant";

export async function GET(request: Request) {
  const variant = pickAbVariant();
  const redirectTo = new URL("/", request.url).toString();

  const payload: ABCookiePayload = { variant, assignedAt: Date.now() };
  const response = NextResponse.redirect(redirectTo);

  response.cookies.set({
    name: AB_COOKIE_NAME,
    value: encodeURIComponent(JSON.stringify(payload)),
    maxAge: AB_COOKIE_MAX_AGE,
    path: "/",
    sameSite: "lax",
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
